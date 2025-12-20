package com.banking.transaction.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.banking.transaction.dto.AccountResponse;
import com.banking.transaction.dto.CreateAccountRequest;
import com.banking.transaction.exception.ResourceNotFoundException;
import com.banking.transaction.model.Account;
import com.banking.transaction.model.AccountStatus;
import com.banking.transaction.repository.AccountRepository;

@Service
public class AccountService {

    private final AccountRepository repo;

    public AccountService(AccountRepository repo) {
        this.repo = repo;
    }

    public AccountResponse createAccount(CreateAccountRequest dto) {

        Account account = new Account();
        account.setAccountNumber(UUID.randomUUID().toString());
        account.setUserId(dto.getUserId());
        account.setAccountType(dto.getAccountType());
        account.setBalance(0.0);
        account.setStatus(AccountStatus.ACTIVE);
        account.setCreatedAt(LocalDateTime.now());

        return mapToResponse(repo.save(account));
    }

    public AccountResponse getAccountById(UUID accountId) {
        Account account = repo.findById(accountId)
                .orElseThrow(() -> new ResourceNotFoundException("Account not found"));
        return mapToResponse(account);
    }

    public List<AccountResponse> getAccountsByUser(UUID userId) {
        return repo.findByUserId(userId)
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public void closeAccount(UUID accountId) {
        Account account = repo.findById(accountId)
                .orElseThrow(() -> new ResourceNotFoundException("Account not found"));
        account.setStatus(AccountStatus.CLOSED);
        repo.save(account);
    }

    private AccountResponse mapToResponse(Account account) {
        AccountResponse res = new AccountResponse();
        res.setAccountId(account.getId());
        res.setAccountNumber(account.getAccountNumber());
        res.setAccountType(account.getAccountType());
        res.setBalance(account.getBalance());
        res.setStatus(account.getStatus());
        res.setCreatedAt(account.getCreatedAt());
        return res;
    }
}
