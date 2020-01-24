package com.jet.eacloud.demo.springboot.eforms.web;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class SessionStatusController {

	@RequestMapping("/session/status")
	public ModelAndView viewStatus(HttpServletRequest req) {
		ModelAndView mv = new ModelAndView("status");
		Integer count = (Integer) req.getSession().getAttribute("SESSION_COUNTER");
		if (count == null) {
			count = 0;
		}
		mv.addObject("sessionCounter", count);
		return mv;
	}

	@RequestMapping("/session/end")
	public ModelAndView sessionEnd(HttpServletRequest req) {
		ModelAndView mv = new ModelAndView("status");
		req.getSession().invalidate();
		mv.addObject("sessionCounter", 0);
		return mv;
	}
}
