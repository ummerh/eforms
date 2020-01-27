package com.jet.eacloud.demo.springboot.eforms.web;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

	@Value("${app.home.url}")
	private String appUrl;

	@RequestMapping("/")
	public ModelAndView home() {
		ModelAndView mv = new ModelAndView("home");
		mv.addObject("app.home.url", appUrl);
		return mv;
	}

	@RequestMapping("/app/**")
	public ModelAndView all() {
		ModelAndView mv = new ModelAndView("home");
		mv.addObject("app.home.url", appUrl);
		return mv;
	}

}
