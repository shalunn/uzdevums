using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using System.Data.SqlClient;

namespace uzdevums
{
    public partial class Main : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
        }

        protected void Page_Init(object sender, EventArgs e)
        {
            div5.Style.Add(HtmlTextWriterStyle.Left, "-350px");
            div2.Style.Add(HtmlTextWriterStyle.Display, "none");
            Profile_1.Style.Add(HtmlTextWriterStyle.Left, "-350px");
            Preferences_1.Style.Add(HtmlTextWriterStyle.Left, "-350px");
            Feedback_1.Style.Add(HtmlTextWriterStyle.Left, "-350px");
            div5.Style.Add(HtmlTextWriterStyle.Display, "Block");
            Profile_1.Style.Add(HtmlTextWriterStyle.Display, "Block");
            Preferences_1.Style.Add(HtmlTextWriterStyle.Display, "Block");
            Feedback_1.Style.Add(HtmlTextWriterStyle.Display, "Block");
            div1.Style.Add(HtmlTextWriterStyle.Display, "Block");
            div3.Style.Add(HtmlTextWriterStyle.Display, "none");
            Properties_1.Style.Add(HtmlTextWriterStyle.Display, "none");
            Types_1.Style.Add(HtmlTextWriterStyle.Display, "none");
        }

        public class Foo
        {
            public string id { get; set; }
            public string name { get; set; }
            public string email { get; set; }
            public string password { get; set; }
        }

        [WebMethod]
        public static List<Foo> GetCompanies()
        {
            System.Threading.Thread.Sleep(500);

            List<Foo> allCompany = new List<Foo>();

            try
            {
                using (SqlConnection cn = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["DB_9B83FB_WebsiteConnectionString"].ConnectionString))
                {
                    using (SqlCommand cmd = new SqlCommand())
                    {
                        cmd.Connection = cn;
                        cn.Open();
                        cmd.CommandText = "SELECT [id], [name], [email], [password] FROM [Authorization]";

                        SqlDataReader reader = cmd.ExecuteReader();

                        while (reader.Read())
                        {
                            string c1 = (reader.GetValue(0).ToString());
                            string c2 = (reader.GetValue(1).ToString());
                            string c3 = (reader.GetValue(2).ToString());
                            string c4 = (reader.GetValue(3).ToString());
                            allCompany.Add(new Foo { id = c1, name = c2, email = c3, password = c4 });
                        }
                        allCompany.ToList();
                    }
                }
            }
            catch (Exception ex)
            {
            }

            return allCompany;
        }

        public class Buttons
        {
            public string id { get; set; }
            public string username { get; set; }
            public string buttonID { get; set; }
            public string buttonName { get; set; }
            public string buttonNumber { get; set; }
            public string buttonTime { get; set; }
            public string buttonType { get; set; }
            public string buttonPosition { get; set; }
            public string buttonGroup { get; set; }
            public string buttonGroupPosition { get; set; }
            public string buttonNotes { get; set; }
            public string buttonSubtasks { get; set; }
            public string parameter1 { get; set; }
            public string parameter2 { get; set; }
        }

        [WebMethod]
        public static List<Buttons> GetCompanies2()
        {
            System.Threading.Thread.Sleep(500);

            List<Buttons> allCompany = new List<Buttons>();

            try
            {
                using (SqlConnection cn = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["DB_9B83FB_WebsiteConnectionString"].ConnectionString))
                {
                    using (SqlCommand cmd = new SqlCommand())
                    {
                        cmd.Connection = cn;
                        cn.Open();
                        cmd.CommandText = "SELECT [id], [username], [buttonID], [buttonName], [buttonNumber], [buttonTime], [buttonType], [buttonPosition], [buttonGroup], [buttonGroupPosition], [buttonNotes], [buttonSubtasks], [parameter1], [parameter2] FROM [MainData]";

                        SqlDataReader reader = cmd.ExecuteReader();

                        while (reader.Read())
                        {
                            string c1 = (reader.GetValue(0).ToString());
                            string c2 = (reader.GetValue(1).ToString());
                            string c3 = (reader.GetValue(2).ToString());
                            string c4 = (reader.GetValue(3).ToString());
                            string c5 = (reader.GetValue(4).ToString());
                            string c6 = (reader.GetValue(5).ToString());
                            string c7 = (reader.GetValue(6).ToString());
                            string c8 = (reader.GetValue(7).ToString());
                            string c9 = (reader.GetValue(8).ToString());
                            string c10 = (reader.GetValue(9).ToString());
                            string c11 = (reader.GetValue(10).ToString());
                            string c12 = (reader.GetValue(11).ToString());
                            string c13 = (reader.GetValue(12).ToString());
                            string c14 = (reader.GetValue(13).ToString());
                            allCompany.Add(new Buttons { id = c1, username = c2, buttonID = c3, buttonName = c4, buttonNumber = c5, buttonTime = c6, buttonType = c7, buttonPosition = c8, buttonGroup = c9, buttonGroupPosition = c10, buttonNotes = c11, buttonSubtasks = c12, parameter1 = c13, parameter2 = c14 });
                        }
                        allCompany.ToList();
                    }
                }
            }
            catch (Exception ex)
            {
            }

            return allCompany;
        }

        [WebMethod]
        public static string SaveData(string Name, string email, string userPassword)
        {
            string status = "";

            try
            {
                using (SqlConnection cn = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["DB_9B83FB_WebsiteConnectionString"].ConnectionString))
                {
                    using (SqlCommand cmd = new SqlCommand())
                    {
                        cmd.Connection = cn;
                        cn.Open();
                        cmd.CommandText = "INSERT INTO [Authorization] ([name], [email], [password]) VALUES (@name, @email, @password)";
                        cmd.Parameters.AddWithValue("@name", Name);
                        cmd.Parameters.AddWithValue("@email", email);
                        cmd.Parameters.AddWithValue("@password", userPassword);

                        cmd.ExecuteNonQuery();
                        status = "success";
                    }
                }
            }
            catch (Exception ex)
            {
            }

            return status;
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////

        [WebMethod]
        public static string SaveData2(string username, string buttonID, string buttonName, string buttonNotes, int buttonNumber, string buttonSubtasks, string buttonTime, int buttonType, int buttonPosition, int buttonGroup, int buttonGroupPosition, int parameter1, int parameter2)
        {
            string status = "";

            try
            {
                using (SqlConnection cn = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["DB_9B83FB_WebsiteConnectionString"].ConnectionString))
                {
                    using (SqlCommand cmd = new SqlCommand())
                    {
                        cmd.Connection = cn;
                        cn.Open();
                        cmd.CommandText = "INSERT INTO [MainData] ([username], [buttonID], [buttonName], [buttonNumber], [buttonTime], [buttonType], [buttonPosition], [buttonGroup], [buttonGroupPosition], [buttonNotes], [buttonSubtasks], [parameter1], [parameter2]) VALUES (@username, @buttonID, @buttonName, @buttonNumber, @buttonTime, @buttonType, @buttonPosition, @buttonGroup, @buttonGroupPosition, @buttonNotes, @buttonSubtasks, @parameter1, @parameter2)";
                        cmd.Parameters.AddWithValue("@username", username);
                        cmd.Parameters.AddWithValue("@buttonID", buttonID);
                        cmd.Parameters.AddWithValue("@buttonName", buttonName);
                        cmd.Parameters.AddWithValue("@buttonNumber", buttonNumber);
                        cmd.Parameters.AddWithValue("@buttonTime", buttonTime);
                        cmd.Parameters.AddWithValue("@buttonType", buttonType);
                        cmd.Parameters.AddWithValue("@buttonPosition", buttonPosition);
                        cmd.Parameters.AddWithValue("@buttonGroup", buttonGroup);
                        cmd.Parameters.AddWithValue("@buttonGroupPosition", buttonGroupPosition);
                        cmd.Parameters.AddWithValue("@buttonNotes", buttonNotes);
                        cmd.Parameters.AddWithValue("@buttonSubtasks", buttonSubtasks);
                        cmd.Parameters.AddWithValue("@parameter1", parameter1);
                        cmd.Parameters.AddWithValue("@parameter2", parameter2);

                        cmd.ExecuteNonQuery();
                        status = "success";
                    }
                }
            }
            catch (Exception ex)
            {
            }

            return status;
        }

        [WebMethod]
        public static string RemoveButton(int ID)
        {
            string status = "";

            try
            {
                using (SqlConnection cn = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["DB_9B83FB_WebsiteConnectionString"].ConnectionString))
                {
                    using (SqlCommand cmd = new SqlCommand())
                    {
                        cmd.Connection = cn;
                        cn.Open();
                        cmd.CommandText = "DELETE FROM [MainData] WHERE [id] = @id";
                        cmd.Parameters.AddWithValue("@id", ID);

                        cmd.ExecuteNonQuery();
                        status = "success";
                    }
                }
            }
            catch (Exception ex)
            {
            }

            return status;
        }

        [WebMethod]
        public static string SaveNotes(int ID, string notes, int parameter1, int parameter2, int buttonGroup)
        {
            string status = "";

            try
            {
                using (SqlConnection cn = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["DB_9B83FB_WebsiteConnectionString"].ConnectionString))
                {
                    using (SqlCommand cmd = new SqlCommand())
                    {
                        cmd.Connection = cn;
                        cn.Open();
                        cmd.CommandText = "UPDATE [MainData] SET [buttonGroup] = @buttonGroup, [buttonNotes] = @buttonNotes, [parameter1] = @parameter1, [parameter2] = @parameter2 WHERE [id] = @id";
                        cmd.Parameters.AddWithValue("@id", ID);
                        cmd.Parameters.AddWithValue("@buttonGroup", buttonGroup);
                        cmd.Parameters.AddWithValue("@buttonNotes", notes);
                        cmd.Parameters.AddWithValue("@parameter1", parameter1);
                        cmd.Parameters.AddWithValue("@parameter2", parameter2);

                        cmd.ExecuteNonQuery();
                        status = "success";
                    }
                }
            }
            catch (Exception ex)
            {
            }

            return status;
        }

        [WebMethod]
        public static string ChangeButtonType(int ID, int type, int buttonPosition, int buttonGroup, int buttonGroupPosition)
        {
            string status = "";

            try
            {
                using (SqlConnection cn = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["DB_9B83FB_WebsiteConnectionString"].ConnectionString))
                {
                    using (SqlCommand cmd = new SqlCommand())
                    {
                        cmd.Connection = cn;
                        cn.Open();
                        cmd.CommandText = "UPDATE [MainData] SET [buttonType] = @buttonType, [buttonPosition] = @buttonPosition, [buttonGroup] = @buttonGroup, [buttonGroupPosition] = @buttonGroupPosition WHERE [id] = @id";
                        cmd.Parameters.AddWithValue("@id", ID);
                        cmd.Parameters.AddWithValue("@buttonType", type);
                        cmd.Parameters.AddWithValue("@buttonPosition", buttonPosition);
                        cmd.Parameters.AddWithValue("@buttonGroup", buttonGroup);
                        cmd.Parameters.AddWithValue("@buttonGroupPosition", buttonGroupPosition);

                        cmd.ExecuteNonQuery();
                        status = "success";
                    }
                }
            }
            catch (Exception ex)
            {
            }

            return status;
        }
    }
}