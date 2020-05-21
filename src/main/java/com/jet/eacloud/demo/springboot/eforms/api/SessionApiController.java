package com.jet.eacloud.demo.springboot.eforms.api;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SessionApiController {

	@RequestMapping("/api/session/increment")
	public @ResponseBody Integer sessionIncrement(HttpServletRequest req) {
		Integer count = (Integer) req.getSession().getAttribute("SESSION_COUNTER");
		if (count == null) {
			count = 0;
		}
		count++;
		req.getSession().setAttribute("SESSION_COUNTER", count);
		return count;
	}

	@RequestMapping("/api/session/status")
	public @ResponseBody SessionStatus sessionStatus(HttpServletRequest req) {
		SessionStatus sessionStatus = new SessionStatus();
		HttpSession session = req.getSession();
		sessionStatus.setId(session.getId());
		sessionStatus.setCreatedTime(session.getCreationTime());
		sessionStatus.setLastAccessedTime(session.getLastAccessedTime());
		return sessionStatus;
	}

}
