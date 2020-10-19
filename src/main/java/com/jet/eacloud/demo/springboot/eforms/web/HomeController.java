package com.jet.eacloud.demo.springboot.eforms.web;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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

	@RequestMapping("/kiosk/**")
	@Autowired
	@PreAuthorize("hasRole('Intune POC')")
	public ModelAndView kiosk(HttpServletRequest req) {
		ModelAndView mv = new ModelAndView("kiosk");
		mv.addObject("app.home.url", appUrl);
		if (SecurityContextHolder.getContext() != null && SecurityContextHolder.getContext().getAuthentication() != null
				&& SecurityContextHolder.getContext().getAuthentication().getPrincipal() != null) {
			Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
			System.out.println(principal.getClass());
			if (OidcUser.class.isAssignableFrom(principal.getClass())) {
				OidcUser oidUser = (OidcUser) principal;
				String givenName = oidUser.getClaimAsString("name");
				mv.addObject("USER_GIVEN_NAME", givenName);
				req.getSession().setAttribute("USER_GIVEN_NAME", givenName);
			}
		}
		return mv;
	}

	@Autowired
	@RequestMapping(value = "/kiosk/oauth2/code/azure", method = RequestMethod.POST)
	public ModelAndView kioskPost() {
		ModelAndView mv = new ModelAndView("kiosk");
		mv.addObject("app.home.url", appUrl);
		return mv;
	}

}
