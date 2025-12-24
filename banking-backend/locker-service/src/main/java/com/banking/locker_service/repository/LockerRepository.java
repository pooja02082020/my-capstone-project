package com.banking.locker_service.repository;

import com.banking.locker_service.enums.LockerStatus;
import com.banking.locker_service.model.Locker;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LockerRepository extends JpaRepository<Locker, Long> {
    List<Locker> findByStatus(LockerStatus status);
}
