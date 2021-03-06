package com.jet.eacloud.demo.springboot.eforms;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.concurrent.ConcurrentTaskScheduler;
import org.springframework.session.data.redis.config.ConfigureRedisAction;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

import io.lettuce.core.ReadFrom;

@EnableJpaRepositories
@EnableRedisHttpSession
public class AppConfig {

	@Value("${redisHostName}")
	private String redisServer;
	@Value("${redisSslPort}")
	private Integer redisPort;
	@Value("${redisPrimaryKey}")
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
