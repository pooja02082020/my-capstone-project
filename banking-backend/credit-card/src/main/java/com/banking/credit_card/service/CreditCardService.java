package com.banking.credit_card.service;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.banking.credit_card.dto.ApplyCreditCardRequest;
import com.banking.credit_card.dto.CreditCardResponse;
import com.banking.credit_card.dto.PayBillRequest;
import com.banking.credit_card.dto.StatementResponse;
import com.banking.credit_card.dto.StatementResponse.TransactionSummary;
import com.banking.credit_card.enums.BillStatus;
import com.banking.credit_card.enums.CardStatus;
import com.banking.credit_card.model.CreditCard;
import com.banking.credit_card.model.CreditCardBill;
import com.banking.credit_card.model.CreditCardTransaction;
import com.banking.credit_card.repository.CreditCardBillRepository;
import com.banking.credit_card.repository.CreditCardRepository;
import com.banking.credit_card.repository.CreditCardTransactionRepository;

@Service
public class CreditCardService {

    private final CreditCardRepository cardRepository;
    private final CreditCardTransactionRepository transactionRepository;
    private final CreditCardBillRepository billRepository;

    public CreditCardService(CreditCardRepository cardRepository,
                             CreditCardTransactionRepository transactionRepository,
                             CreditCardBillRepository billRepository) {
        this.cardRepository = cardRepository;
        this.transactionRepository = transactionRepository;
        this.billRepository = billRepository;
    }

    // Apply for credit card
    public CreditCardResponse applyForCreditCard(ApplyCreditCardRequest dto) {

        CreditCard card = new CreditCard();
        card.setUserId(dto.getUserId());
        card.setCardNumber(UUID.randomUUID().toString());
        card.setCreditLimit(dto.getRequestedLimit());
        card.setAvailableLimit(dto.getRequestedLimit());
        card.setCardStatus(CardStatus.INACTIVE);
        card.setExpiryDate(LocalDate.now().plusYears(5));

        return mapToResponse(cardRepository.save(card));
    }

    //  Activate card
    public CreditCardResponse activateCard(Long cardId) {
        CreditCard card = getCard(cardId);
        card.setCardStatus(CardStatus.ACTIVE);
        return mapToResponse(cardRepository.save(card));
    }

    // Deactivate card
    public CreditCardResponse deactivateCard(Long cardId) {
        CreditCard card = getCard(cardId);
        card.setCardStatus(CardStatus.INACTIVE);
        return mapToResponse(cardRepository.save(card));
    }

    //  Get card details
    public CreditCardResponse getCardDetails(Long cardId) {
        return mapToResponse(getCard(cardId));
    }

    //  Get cards by user
    public List<CreditCardResponse> getCardsByUser(Long userId) {
        return cardRepository.findByUserId(userId)
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    // Pay credit card bill
    public void payBill(Long cardId, PayBillRequest dto) {

        CreditCard card = getCard(cardId);

        CreditCardBill bill = billRepository
                .findByCardIdAndBillingMonth(cardId, LocalDate.now().getMonth().toString())
                .orElseThrow(() -> new RuntimeException("Bill not found"));

        bill.setStatus(BillStatus.PAID);
        billRepository.save(bill);

        card.setAvailableLimit(card.getAvailableLimit() + dto.getAmount());
        cardRepository.save(card);
    }

    //  Monthly statement
    public StatementResponse getMonthlyStatement(Long cardId) {

        List<CreditCardTransaction> transactions =
                transactionRepository.findByCardId(cardId);

        List<TransactionSummary> summaries = transactions.stream().map(tx -> {
            TransactionSummary ts = new TransactionSummary();
            ts.setAmount(tx.getAmount());
            ts.setMerchant(tx.getMerchant());
            ts.setDate(tx.getTransactionDate().toString());
            ts.setStatus(tx.getStatus().name());
            return ts;
        }).collect(Collectors.toList());

        StatementResponse res = new StatementResponse();
        res.setCardId(cardId);
        res.setBillingMonth(LocalDate.now().getMonth().toString());
        res.setTransactions(summaries);

        return res;
    }

    //  Helper methods
    private CreditCard getCard(Long cardId) {
        return cardRepository.findById(cardId)
                .orElseThrow(() -> new RuntimeException("Credit card not found"));
    }

    private CreditCardResponse mapToResponse(CreditCard card) {
        CreditCardResponse res = new CreditCardResponse();
        res.setCardId(card.getId());
        res.setCardNumber(card.getCardNumber());
        res.setCreditLimit(card.getCreditLimit());
        res.setAvailableLimit(card.getAvailableLimit());
        res.setCardStatus(card.getCardStatus());
        res.setExpiryDate(card.getExpiryDate());
        return res;
    }
}
