package com.banking.locker_service.dto;

import java.time.LocalDateTime;

public class LockerAuditResponse {

    private Long lockerId;
    private Long userId;
    private LocalDateTime assignedDate;
    private LocalDateTime releasedDate;

    public LockerAuditResponse(Long lockerId, Long userId,
                               LocalDateTime assignedDate,
                               LocalDateTime releasedDate) {
        this.lockerId = lockerId;
        this.userId = userId;
        this.assignedDate = assignedDate;
        this.releasedDate = releasedDate;
    }

    public Long getLockerId() {
        return lockerId;
    }

    public Long getUserId() {
        return userId;
    }

    public LocalDateTime getAssignedDate() {
        return assignedDate;
    }

    public LocalDateTime getReleasedDate() {
        return releasedDate;
    }
}
