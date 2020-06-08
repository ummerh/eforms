package com.jet.eacloud.demo.springboot.eforms.api;

import java.util.UUID;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RandomUuidAPI {

	@RequestMapping("/api/uuid")
	public String randomUUID() {
		return UUID.randomUUID().toString();
	}
}
