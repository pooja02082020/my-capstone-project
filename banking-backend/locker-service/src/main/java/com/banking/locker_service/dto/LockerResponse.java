package com.banking.locker_service.dto;

import com.banking.locker_service.enums.LockerStatus;

public class LockerResponse {

    private Long lockerId;
    private String lockerNumber;
    private LockerStatus status;

    public LockerResponse(Long lockerId, String lockerNumber, LockerStatus status) {
        this.lockerId = lockerId;
        this.lockerNumber = lockerNumber;
        this.status = status;
    }

    public Long getLockerId() {
        return lockerId;
    }

    public String getLockerNumber() {
        return lockerNumber;
    }

    public LockerStatus getStatus() {
        return status;
    }
}
