package com.banking.locker_service.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "locker_assignments")
public class LockerAssignment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long lockerId;
    private Long userId;

    private LocalDateTime assignedDate;
    private LocalDateTime releasedDate;

    public LockerAssignment() {}

    public Long getId() {
        return id;
    }

    public Long getLockerId() {
        return lockerId;
    }

    public void setLockerId(Long lockerId) {
        this.lockerId = lockerId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public LocalDateTime getAssignedDate() {
        return assignedDate;
    }

    public void setAssignedDate(LocalDateTime assignedDate) {
        this.assignedDate = assignedDate;
    }

    public LocalDateTime getReleasedDate() {
        return releasedDate;
    }

    public void setReleasedDate(LocalDateTime releasedDate) {
        this.releasedDate = releasedDate;
    }
}
