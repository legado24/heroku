package com.legado.appventa.response;

import java.math.BigDecimal;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class StatusResponse {
    private BigDecimal code;
    private String message;
}
