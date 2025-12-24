package com.banking.locker_service.service;

import com.banking.locker_service.dto.*;
import com.banking.locker_service.enums.LockerStatus;
import com.banking.locker_service.model.*;
import com.banking.locker_service.repository.*;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class LockerService {

    private final LockerRepository lockerRepo;
    private final LockerAssignmentRepository assignmentRepo;

    public LockerService(LockerRepository lockerRepo,
                         LockerAssignmentRepository assignmentRepo) {
        this.lockerRepo = lockerRepo;
        this.assignmentRepo = assignmentRepo;
    }

    public List<Locker> getAvailableLockers() {
        return lockerRepo.findByStatus(LockerStatus.AVAILABLE);
    }

    public void assignLocker(AssignLockerRequest request) {
        Locker locker = lockerRepo.findById(request.getLockerId())
                .orElseThrow(() -> new RuntimeException("Locker not found"));

        if (locker.getStatus() == LockerStatus.ASSIGNED) {
            throw new RuntimeException("Locker already assigned");
        }

        locker.setStatus(LockerStatus.ASSIGNED);
        lockerRepo.save(locker);

        LockerAssignment assignment = new LockerAssignment();
        assignment.setLockerId(locker.getId());
        assignment.setUserId(request.getUserId());
        assignment.setAssignedDate(LocalDateTime.now());

        assignmentRepo.save(assignment);
    }

    public LockerAuditResponse getUserLocker(Long userId) {
        LockerAssignment assignment = assignmentRepo
                .findByUserIdAndReleasedDateIsNull(userId)
                .orElseThrow(() -> new RuntimeException("No locker assigned"));

        return new LockerAuditResponse(
                assignment.getLockerId(),
                assignment.getUserId(),
                assignment.getAssignedDate(),
                assignment.getReleasedDate()
        );
    }

    public void releaseLocker(Long lockerId) {
        Locker locker = lockerRepo.findById(lockerId)
                .orElseThrow(() -> new RuntimeException("Locker not found"));

        locker.setStatus(LockerStatus.AVAILABLE);
        lockerRepo.save(locker);

        assignmentRepo.findAll().stream()
                .filter(a -> a.getLockerId().equals(lockerId) && a.getReleasedDate() == null)
                .findFirst()
                .ifPresent(a -> {
                    a.setReleasedDate(LocalDateTime.now());
                    assignmentRepo.save(a);
                });
    }
}
