package com.banking.credit_card.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.banking.credit_card.model.CreditCardBill;

public interface CreditCardBillRepository extends JpaRepository<CreditCardBill, Long> {

	Optional<CreditCardBill> findByCardIdAndBillingMonth(Long cardId, String billingMonth);
}
