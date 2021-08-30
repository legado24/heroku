package com.legado.appventa.dao;

import java.math.BigDecimal;
import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.Types;
import java.util.ArrayList;
import java.util.List;

import com.legado.appventa.model.Sede;
import com.legado.appventa.response.SedeListResponse;
import com.legado.appventa.response.StatusResponse;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class SedeDaoImpl implements SedeDao {

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public SedeListResponse listSedes(String codCompany) {
        return sessionFactory.getCurrentSession().doReturningWork(connection -> {
            SedeListResponse sedeListResponse = new SedeListResponse();
            StatusResponse statusResponse = new StatusResponse();
            try {

                CallableStatement cs = connection.prepareCall("{ call list_sedes_by_company(?,?,?,?)}");
                cs.setObject(1, codCompany, Types.VARCHAR);
                cs.registerOutParameter(2, Types.OTHER);
                cs.registerOutParameter(3, Types.NUMERIC);
                cs.registerOutParameter(4, Types.VARCHAR);
                cs.execute();
                ResultSet rs = (ResultSet) cs.getObject(2);
                List<Sede> sedes = new ArrayList<>();
                statusResponse.setCode(cs.getBigDecimal(3));
                statusResponse.setMessage(cs.getString(4));
                if (rs != null) {
                    while (rs.next()) {
                        Sede sede = new Sede();
                        sede.setCode(rs.getString("CODE"));
                        sede.setDescription(rs.getString("DESCRIPTION"));
                        sedes.add(sede);
                    }
                }
                sedeListResponse.setStatusResponse(statusResponse);
                sedeListResponse.setSedeList(sedes);

                return sedeListResponse;
            } catch (Exception e) {
                statusResponse.setCode(new BigDecimal(-1));
                statusResponse.setMessage(e.getMessage());
                return sedeListResponse;
            }

        });
    }

}
