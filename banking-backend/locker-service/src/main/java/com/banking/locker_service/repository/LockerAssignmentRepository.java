package com.banking.locker_service.repository;

import com.banking.locker_service.model.LockerAssignment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LockerAssignmentRepository extends JpaRepository<LockerAssignment, Long> {
    Optional<LockerAssignment> findByUserIdAndReleasedDateIsNull(Long userId);
}
