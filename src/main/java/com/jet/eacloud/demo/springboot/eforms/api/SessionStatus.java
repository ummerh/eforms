package com.jet.eacloud.demo.springboot.eforms.api;

public class SessionStatus {
    private long createdTime, lastAccessedTime;
    private String id;

    public long getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(long createdTime) {
        this.createdTime = createdTime;
    }

    public long getLastAccessedTime() {
        return lastAccessedTime;
    }

    public void setLastAccessedTime(long lastAccessedTime) {
        this.lastAccessedTime = lastAccessedTime;
    }

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
    

}