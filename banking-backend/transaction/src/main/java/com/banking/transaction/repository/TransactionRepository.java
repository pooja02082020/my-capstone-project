package com.banking.transaction.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.banking.transaction.model.Transaction;
import com.banking.transaction.model.TransactionStatus;

public interface TransactionRepository extends JpaRepository<Transaction, UUID> {

	List<Transaction> findByFromAccountIdOrToAccountId(UUID fromAccountId, UUID toAccountId);

	List<Transaction> findByStatus(TransactionStatus status);
}
