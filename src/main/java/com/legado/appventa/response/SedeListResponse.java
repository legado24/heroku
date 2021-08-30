package com.legado.appventa.response;

import java.util.List;

import com.legado.appventa.model.Sede;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SedeListResponse{
    private StatusResponse statusResponse;
    private List<Sede> sedeList;
}