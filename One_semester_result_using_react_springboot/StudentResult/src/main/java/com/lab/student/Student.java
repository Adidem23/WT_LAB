package com.lab.student;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
    
    public Student() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Student(Long id,String name) {
		super();
		this.id = id;
		this.name = name;
	}

	@Column
    private String name;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	@Column
	private int CcMse;
	@Column
	private int DaaMse;
	@Column
	private int SdamMse;
	@Column
	private int WtMse;
	@Column
	private int CcEse;
	@Column
	private int DaaEse;
	@Column
	private int SdamEse;
	@Column
	private int WtEse;
	
	@Column 
	private double percentage;

	public double getPercentage() {
		return percentage;
	}

	public void setPercentage(double percentage) {
		this.percentage = percentage;
	}

	public Student(String name, int ccMse, int daaMse, int sdamMse, int wtMse, int ccEse, int daaEse, int sdamEse,
			int wtEse) {
		super();
		this.name = name;
		CcMse = ccMse;
		DaaMse = daaMse;
		SdamMse = sdamMse;
		WtMse = wtMse;
		CcEse = ccEse;
		DaaEse = daaEse;
		SdamEse = sdamEse;
		WtEse = wtEse;
	}

	public int getCcMse() {
		return CcMse;
	}

	public void setCcMse(int ccMse) {
		CcMse = ccMse;
	}

	public int getDaaMse() {
		return DaaMse;
	}

	public void setDaaMse(int daaMse) {
		DaaMse = daaMse;
	}

	public int getSdamMse() {
		return SdamMse;
	}

	public void setSdamMse(int sdamMse) {
		SdamMse = sdamMse;
	}

	public int getWtMse() {
		return WtMse;
	}

	public void setWtMse(int wtMse) {
		WtMse = wtMse;
	}

	public int getCcEse() {
		return CcEse;
	}

	public void setCcEse(int ccEse) {
		CcEse = ccEse;
	}

	public int getDaaEse() {
		return DaaEse;
	}

	public void setDaaEse(int daaEse) {
		DaaEse = daaEse;
	}

	public int getSdamEse() {
		return SdamEse;
	}

	public void setSdamEse(int sdamEse) {
		SdamEse = sdamEse;
	}

	public int getWtEse() {
		return WtEse;
	}

	public void setWtEse(int wtEse) {
		WtEse = wtEse;
	}
}
