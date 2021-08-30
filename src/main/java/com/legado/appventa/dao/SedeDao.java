package com.legado.appventa.dao;

import com.legado.appventa.response.SedeListResponse;

public interface SedeDao {
    SedeListResponse listSedes(String codCompany);
}
