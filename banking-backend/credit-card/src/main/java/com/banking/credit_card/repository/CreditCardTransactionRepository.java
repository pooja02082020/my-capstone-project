package com.banking.credit_card.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.banking.credit_card.model.CreditCardTransaction;

public interface CreditCardTransactionRepository extends JpaRepository<CreditCardTransaction, Long> {

	List<CreditCardTransaction> findByCardId(Long cardId);
}
