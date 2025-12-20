package com.banking.transaction.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.banking.transaction.dto.*;
import com.banking.transaction.exception.ResourceNotFoundException;
import com.banking.transaction.model.*;
import com.banking.transaction.repository.AccountRepository;
import com.banking.transaction.repository.TransactionRepository;

@Service
public class TransactionService {

    private final AccountRepository accountRepo;
    private final TransactionRepository txnRepo;

    public TransactionService(AccountRepository accountRepo,
                              TransactionRepository txnRepo) {
        this.accountRepo = accountRepo;
        this.txnRepo = txnRepo;
    }

    // ---------------- DEPOSIT ----------------
    @Transactional
    public TransactionResponse deposit(DepositRequest dto) {
        Account account = getActiveAccount(dto.getAccountId());
        account.setBalance(account.getBalance() + dto.getAmount());
        accountRepo.save(account);

        return createTransaction(null, account.getId(), dto.getAmount(),
                TransactionType.DEPOSIT);
    }

    // ---------------- WITHDRAW ----------------
    @Transactional
    public TransactionResponse withdraw(WithdrawRequest dto) {
        Account account = getActiveAccount(dto.getAccountId());

        if (account.getBalance() < dto.getAmount()) {
            throw new RuntimeException("Insufficient balance");
        }

        account.setBalance(account.getBalance() - dto.getAmount());
        accountRepo.save(account);

        return createTransaction(account.getId(), null, dto.getAmount(),
                TransactionType.WITHDRAW);
    }

    // ---------------- TRANSFER ----------------
    @Transactional
    public TransactionResponse transfer(TransferRequest dto) {
        Account from = getActiveAccount(dto.getFromAccountId());
        Account to = getActiveAccount(dto.getToAccountId());

        if (from.getBalance() < dto.getAmount()) {
            throw new RuntimeException("Insufficient balance");
        }

        from.setBalance(from.getBalance() - dto.getAmount());
        to.setBalance(to.getBalance() + dto.getAmount());

        accountRepo.save(from);
        accountRepo.save(to);

        return createTransaction(from.getId(), to.getId(), dto.getAmount(),
                TransactionType.TRANSFER);
    }

    // ---------------- GET APIs ----------------
    public List<TransactionResponse> getHistory(UUID accountId) {
        return txnRepo.findByFromAccountIdOrToAccountId(accountId, accountId)
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public TransactionResponse getByTransactionId(UUID txnId) {
        Transaction txn = txnRepo.findById(txnId)
                .orElseThrow(() -> new ResourceNotFoundException("Transaction not found"));
        return mapToResponse(txn);
    }

    public List<TransactionResponse> getAllTransactions() {
        return txnRepo.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public List<TransactionResponse> getByStatus(TransactionStatus status) {
        return txnRepo.findByStatus(status)
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    // ---------------- HELPERS ----------------
    private Account getActiveAccount(UUID id) {
        Account account = accountRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Account not found"));

        if (account.getStatus() == AccountStatus.CLOSED) {
            throw new RuntimeException("Account is closed");
        }
        return account;
    }

    private TransactionResponse createTransaction(UUID from, UUID to,
            Double amount, TransactionType type) {

        Transaction txn = new Transaction();
        txn.setTransactionId(UUID.randomUUID().toString());
        txn.setFromAccountId(from);
        txn.setToAccountId(to);
        txn.setAmount(amount);
        txn.setTransactionType(type);
        txn.setStatus(TransactionStatus.SUCCESS);
        txn.setCreatedAt(LocalDateTime.now());

        return mapToResponse(txnRepo.save(txn));
    }

    private TransactionResponse mapToResponse(Transaction txn) {
        TransactionResponse res = new TransactionResponse();
        res.setTransactionId(txn.getId());
        res.setFromAccountId(txn.getFromAccountId());
        res.setToAccountId(txn.getToAccountId());
        res.setAmount(txn.getAmount());
        res.setTransactionType(txn.getTransactionType());
        res.setStatus(txn.getStatus());
        res.setCreatedAt(txn.getCreatedAt());
        return res;
    }
}
