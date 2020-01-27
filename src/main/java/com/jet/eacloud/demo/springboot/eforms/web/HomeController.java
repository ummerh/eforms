package com.jet.eacloud.demo.springboot.eforms.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

	@RequestMapping("/home")
	public ModelAndView home() {
		return new ModelAndView("home");
	}

	@RequestMapping("/demo1")
	public ModelAndView demo1() {
		return new ModelAndView("demo1");
	}
}
