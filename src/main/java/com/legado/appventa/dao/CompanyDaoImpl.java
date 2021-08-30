package com.legado.appventa.dao;

import java.math.BigDecimal;
import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.Types;
import java.util.ArrayList;
import java.util.List;

import com.legado.appventa.model.Company;
import com.legado.appventa.response.CompanyListResponse;
import com.legado.appventa.response.StatusResponse;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CompanyDaoImpl implements CompanyDao {

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public CompanyListResponse listCompany() {
        return sessionFactory.getCurrentSession().doReturningWork(connection -> {
            StatusResponse statusResponse = new StatusResponse();
            CompanyListResponse companyResponse = new CompanyListResponse();
            try {
               

                CallableStatement cs = connection.prepareCall("{ call list_companys(?,?,?)}");
            
                cs.registerOutParameter(1, Types.OTHER);
                cs.registerOutParameter(2, Types.NUMERIC);
                cs.registerOutParameter(3, Types.VARCHAR);
                cs.execute();
                ResultSet rs = (ResultSet) cs.getObject(1);
                List<Company> companyList = new ArrayList<>();
                statusResponse.setCode(cs.getBigDecimal(2));
                statusResponse.setMessage(cs.getString(3));
                if (rs != null) {
                    while (rs.next()) {
                        Company company = new Company();
                        company.setCode(rs.getString("CODE"));
                        company.setDescription(rs.getString("DESCRIPTION"));
                        companyList.add(company);
                    }
                    rs.close();
                    cs.close();

                }
                companyResponse.setCompanyList(companyList);
                companyResponse.setStatusResponse(statusResponse);

                return companyResponse;

            } catch (Exception e) {
                statusResponse.setCode(new BigDecimal(-1));
                statusResponse.setMessage(e.getMessage());
                return companyResponse;
            }
        });
    }

}
