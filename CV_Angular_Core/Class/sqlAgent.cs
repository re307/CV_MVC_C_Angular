using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace CV_Angular_Core.Class
{
    public class sqlAgent
    {

        public static string returnedValue = null;
        public static DataTable returnedDt = null;


        //private string strConnection1 = "User ID=Consulta; Password=s4k8rd]@; Data Source=CORPSFEVEXTSQLP.corp.televisa.com.mx,2020;";
        //private string s_connection = ConfigurationManager.ConnectionStrings["Global"].ConnectionString;
        //Data Source=DESKTOP-TUKL1RT;Initial Catalog=Global;Persist Security Info=True;User ID=Desarrollo;Password=9X#K_osR; MultipleActiveResultSets=True;
        private string s_connection = "Data Source=.;Initial Catalog=CV;Integrated Security=True";
        private string s2_connection = @"Server=.\DESKTOP-897QFBK;DataBase=CV;trusted_Connection=True;ConnectRetryCount=0";
        private SqlCommand strCommand = new SqlCommand();

        public void spSummon(string spName, string[] spParameters)
        {
            using (SqlConnection cn = new SqlConnection(s_connection))
            {
                try
                {
                    SqlCommand cmd = new SqlCommand(spName, cn);
                    cmd.CommandType = CommandType.StoredProcedure;

                    for (int i = 0; i <= spParameters.Count() - 1; i++)
                    {
                        String[] substrings = spParameters[i].Split(':');
                        cmd.Parameters.AddWithValue(substrings[0], substrings[1]);
                    }

                    cmd.CommandTimeout = 0;
                    cn.Open();
                    cmd.ExecuteNonQuery();
                }
                catch (Exception e)
                {
                    throw (e);
                }

            }
        }

        public void spSummon_e(string spName, string[] spParameters)
        {
            //using (SqlConnection cn = new SqlConnection(ConfigurationManager.ConnectionStrings["Ecommerce"].ConnectionString))
            using (SqlConnection cn = new SqlConnection(s2_connection))
            {
                try
                {
                    SqlCommand cmd = new SqlCommand(spName, cn);
                    cmd.CommandType = CommandType.StoredProcedure;

                    for (int i = 0; i <= spParameters.Count() - 1; i++)
                    {
                        String[] substrings = spParameters[i].Split(':');
                        cmd.Parameters.AddWithValue(substrings[0], substrings[1]);
                    }

                    cmd.CommandTimeout = 0;
                    cn.Open();
                    cmd.ExecuteNonQuery();
                }
                catch (Exception e)
                {
                    throw (e);
                }

            }
        }

        public void spSummon_SendJson(string spName, string ActionValue, string json)
        {
        //using (SqlConnection cn = new SqlConnection(ConfigurationManager.ConnectionStrings["Ecommerce"].ConnectionString))
        using (SqlConnection cn = new SqlConnection(s2_connection))
        {
            try
            {
                SqlCommand cmd = new SqlCommand(spName, cn);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Action", ActionValue);
                cmd.Parameters.AddWithValue("@JSON", json);

                cmd.CommandTimeout = 0;
                cn.Open();
                cmd.ExecuteNonQuery();
            }
            catch (Exception e)
            {
                throw (e);
            }

        }
        }


        public void spSummon_SendXML(string spName, string ActionValue, string xml, string Order_Id)
        {
            //using (SqlConnection cn = new SqlConnection(ConfigurationManager.ConnectionStrings["Ecommerce"].ConnectionString))
            using (SqlConnection cn = new SqlConnection(s2_connection))
            {
                try
                {
                    SqlCommand cmd = new SqlCommand(spName, cn);
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.Parameters.AddWithValue("@Action", ActionValue);
                    cmd.Parameters.AddWithValue("@XML", xml);
                    cmd.Parameters.AddWithValue("@Order_Id", Order_Id);

                    cmd.CommandTimeout = 0;
                    cn.Open();
                    cmd.ExecuteNonQuery();
                }
                catch (Exception e)
                {
                    throw (e);
                }

            }
        }

        public void spGetUniqueValueResponse_e(string spName, string[] spParameters)
        {

            //using (SqlConnection cn = new SqlConnection(ConfigurationManager.ConnectionStrings["Ecommerce"].ConnectionString))
            using (SqlConnection cn = new SqlConnection(s2_connection))
            {
                cn.Open();
                DataTable dt = new DataTable();

                SqlCommand cmd = new SqlCommand(spName, cn);
                cmd.CommandType = CommandType.StoredProcedure;

                for (int i = 0; i <= spParameters.Count() - 1; i++)
                {
                    String[] substrings = spParameters[i].Split(':');
                    cmd.Parameters.AddWithValue(substrings[0], substrings[1]);
                }

                cmd.ExecuteNonQuery();
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(dt);

                DataRow[] rows = dt.Select();
                if (dt.Rows.Count == 1)
                {
                    //for (int i = 0; i < rows.Length; i++)
                    //{
                    //    Console.WriteLine(rows[i]["Order_Back"]);
                    //}

                    returnedValue = rows[0].ItemArray[0].ToString();
                }
                //else
                //{

                //}
            }
            //return valueBACK;
        }


        public DataTable spGetData(string spName, string[] spParameters)
        {

            //using (SqlConnection cn = new SqlConnection(ConfigurationManager.ConnectionStrings["Global"].ConnectionString))
            using (SqlConnection cn = new SqlConnection(s_connection))
            {
                cn.Open();
                DataTable dt = new DataTable();

                SqlCommand cmd = new SqlCommand(spName, cn);
                cmd.CommandType = CommandType.StoredProcedure;

                for (int i = 0; i <= spParameters.Count() - 1; i++)
                {
                    String[] substrings = spParameters[i].Split(':');
                    cmd.Parameters.AddWithValue(substrings[0], substrings[1]);
                }

                cmd.ExecuteNonQuery();
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(dt);

                if (dt.Rows.Count > 0)
                {
                    //for (int i = 0; i < rows.Length; i++)
                    //{
                    //    Console.WriteLine(rows[i]["Order_Back"]);
                    //}

                    returnedDt = dt;
                }
            }
            return returnedDt;
        }

    }
}
