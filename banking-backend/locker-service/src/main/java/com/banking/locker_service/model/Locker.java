package com.banking.locker_service.model;

import com.banking.locker_service.enums.LockerStatus;
import jakarta.persistence.*;

@Entity
@Table(name = "lockers")
public class Locker {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String lockerNumber;

    @Enumerated(EnumType.STRING)
    private LockerStatus status;

    public Locker() {}

    public Long getId() {
        return id;
    }

    public String getLockerNumber() {
        return lockerNumber;
    }

    public void setLockerNumber(String lockerNumber) {
        this.lockerNumber = lockerNumber;
    }

    public LockerStatus getStatus() {
        return status;
    }

    public void setStatus(LockerStatus status) {
        this.status = status;
    }
}
