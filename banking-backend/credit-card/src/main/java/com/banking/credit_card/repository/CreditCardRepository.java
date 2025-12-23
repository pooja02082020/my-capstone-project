package com.banking.credit_card.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.banking.credit_card.model.CreditCard;

public interface CreditCardRepository extends JpaRepository<CreditCard, Long> {

    List<CreditCard> findByUserId(Long userId);
}
