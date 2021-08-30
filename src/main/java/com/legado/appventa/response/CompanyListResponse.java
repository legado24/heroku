package com.legado.appventa.response;

import java.util.List;

import com.legado.appventa.model.Company;

import lombok.Data;
import lombok.NoArgsConstructor;

 

@Data
@NoArgsConstructor
public class CompanyListResponse {
    private StatusResponse statusResponse;
    private List<Company> companyList;

}
