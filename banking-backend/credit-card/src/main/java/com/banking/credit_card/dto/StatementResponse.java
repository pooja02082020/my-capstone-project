package com.banking.credit_card.dto;

import java.util.List;

public class StatementResponse {

	private Long cardId;
	private String billingMonth;
	private Double totalAmount;
	private List<TransactionSummary> transactions;

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

	public List<TransactionSummary> getTransactions() {
		return transactions;
	}

	public void setTransactions(List<TransactionSummary> transactions) {
		this.transactions = transactions;
	}

	public static class TransactionSummary {
		private Double amount;
		private String merchant;
		private String date;
		private String status;

		public Double getAmount() {
			return amount;
		}

		public void setAmount(Double amount) {
			this.amount = amount;
		}

		public String getMerchant() {
			return merchant;
		}

		public void setMerchant(String merchant) {
			this.merchant = merchant;
		}

		public String getDate() {
			return date;
		}

		public void setDate(String date) {
			this.date = date;
		}

		public String getStatus() {
			return status;
		}

		public void setStatus(String status) {
			this.status = status;
		}

	}
}
