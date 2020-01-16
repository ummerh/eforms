package com.jet.eacloud.demo.springboot.eforms;

import org.springframework.session.web.context.AbstractHttpSessionApplicationInitializer;

public class ServletInitializer extends AbstractHttpSessionApplicationInitializer  {

	public ServletInitializer() {
		super(AppConfig.class);
	}
}
