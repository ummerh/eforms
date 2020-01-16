package com.jet.eacloud.demo.springboot.eforms;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.concurrent.ConcurrentTaskScheduler;
import org.springframework.session.data.redis.config.ConfigureRedisAction;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

import io.lettuce.core.ReadFrom;

@EnableRedisHttpSession
public class AppConfig {

	@Value("${spring.redis.host}")
	private String redisServer;
	@Value("${spring.redis.port}")
	private Integer redisPort;
	@Value("${spring.redis.password}")
	private String redisPassword;

	@Bean
	public LettuceConnectionFactory redisConnectionFactory() {
		LettuceClientConfiguration clientConfig = LettuceClientConfiguration.builder().readFrom(ReadFrom.MASTER)
				.useSsl().build();
		RedisStandaloneConfiguration serverConfig = new RedisStandaloneConfiguration(redisServer, redisPort);
		serverConfig.setPassword(redisPassword);
		return new LettuceConnectionFactory(serverConfig, clientConfig);
	}

	// https://github.com/spring-projects/spring-session/issues/124
	@Bean
	public static ConfigureRedisAction configureRedisAction() {
		return ConfigureRedisAction.NO_OP;
	}

	@Bean
	public TaskScheduler taskScheduler() {
		return new ConcurrentTaskScheduler(); // single threaded by default
	}
}
