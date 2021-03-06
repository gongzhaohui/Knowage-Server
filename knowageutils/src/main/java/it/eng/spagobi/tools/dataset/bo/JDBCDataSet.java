/*
 * Knowage, Open Source Business Intelligence suite
 * Copyright (C) 2016 Engineering Ingegneria Informatica S.p.A.
 *
 * Knowage is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Knowage is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

package it.eng.spagobi.tools.dataset.bo;

import it.eng.spagobi.services.dataset.bo.SpagoBiDataSet;
import it.eng.spagobi.tools.dataset.common.behaviour.QuerableBehaviour;
import it.eng.spagobi.tools.dataset.common.dataproxy.JDBCDataProxy;
import it.eng.spagobi.tools.dataset.common.datareader.JDBCStandardDataReader;
import it.eng.spagobi.tools.dataset.common.iterator.DataIterator;
import it.eng.spagobi.tools.dataset.common.iterator.ResultSetIterator;
import it.eng.spagobi.tools.datasource.bo.IDataSource;
import it.eng.spagobi.utilities.assertion.Assert;
import it.eng.spagobi.utilities.exceptions.SpagoBIRuntimeException;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.naming.NamingException;

import org.apache.log4j.Logger;

/**
 * @authors Angelo Bernabei angelo.bernabei@eng.it Giulio Gavardi giulio.gavardi@eng.it Andrea Gioia andrea.gioia@eng.it Alberto Ghedin alberto.ghedin@eng.it
 *          Monica Franceschini monica.franceschini@eng.it *
 */
public class JDBCDataSet extends AbstractJDBCDataset {

	public static String DS_TYPE = "SbiQueryDataSet";

	private static transient Logger logger = Logger.getLogger(JDBCDataSet.class);

	/**
	 * Instantiates a new empty JDBC data set.
	 */
	public JDBCDataSet() {
		super();
		setDataReader(new JDBCStandardDataReader());
	}

	public JDBCDataSet(JDBCDataSet jdbcDataset) {
		super(jdbcDataset);
	}

	public JDBCDataSet(SpagoBiDataSet dataSetConfig) {
		super(dataSetConfig);
	}
}
