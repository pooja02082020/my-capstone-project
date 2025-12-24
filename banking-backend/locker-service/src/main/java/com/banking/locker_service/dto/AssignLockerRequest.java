package com.banking.locker_service.dto;

public class AssignLockerRequest {

    private Long lockerId;
    private Long userId;

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
}
