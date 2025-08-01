package com.ganatan.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = {
    "com.ganatan.controllers",
    "com.ganatan.modules.person"
})
public class WebConfig {
}
