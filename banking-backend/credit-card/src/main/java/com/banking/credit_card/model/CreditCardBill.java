package com.banking.credit_card.model;

import java.time.LocalDate;

import com.banking.credit_card.enums.BillStatus;

import jakarta.persistence.*;

@Entity
@Table(name = "credit_card_bills")
public class CreditCardBill {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private Long cardId;

	private String billingMonth; // e.g. "2025-01"

	private Double totalAmount;

	private LocalDate dueDate;

	@Enumerated(EnumType.STRING)
	private BillStatus status;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getCardId() {
		return cardId;
	}

	public void setCardId(Long cardId) {
		this.cardId = cardId;
	}

	public String getBillingMonth() {
		return billingMonth;
	}

	public void setBillingMonth(String billingMonth) {
		this.billingMonth = billingMonth;
	}

	public Double getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(Double totalAmount) {
		this.totalAmount = totalAmount;
	}

	public LocalDate getDueDate() {
		return dueDate;
	}

	public void setDueDate(LocalDate dueDate) {
		this.dueDate = dueDate;
	}

	public BillStatus getStatus() {
		return status;
	}

	public void setStatus(BillStatus status) {
		this.status = status;
	}

	public CreditCardBill() {
	}

	
}
