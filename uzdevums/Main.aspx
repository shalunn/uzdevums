<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Main.aspx.cs" Inherits="uzdevums.Main" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Any.do</title>
    <script src="http://code.jquery.com/jquery-1.7.1.js"></script>
    <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="//code.jquery.com/jquery-1.10.2.js"></script>
    <script src="//code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
    <link rel="stylesheet" href="/resources/demos/style.css">
    <link href="CSS/MainStyle.css" rel="stylesheet" type="text/css" />
    <link href="CSS/MainStyle.css" rel="stylesheet" type="text/css" />
    <script language="javascript" type="text/javascript" src="/Scripts/MainScripts.js"></script>
    <script language="javascript" type="text/javascript" src="/Scripts/CreateNewAccount.js"></script>
    <script language="javascript" type="text/javascript" src="/Scripts/SignIn.js"></script>
    <script language="javascript" type="text/javascript" src="/Scripts/ForgotPassword.js"></script>
    <script language="javascript" type="text/javascript" src="/Scripts/DataSave.js"></script>
    <script language="javascript" type="text/javascript" src="/Scripts/LoadProperties.js"></script>
    <script language="javascript" type="text/javascript" src="/Scripts/RemoveButton.js"></script>
    <script language="javascript" type="text/javascript" src="/Scripts/RemoveSubTask.js"></script>
    <script language="javascript" type="text/javascript" src="/Scripts/SaveNotes.js"></script>
    <script language="javascript" type="text/javascript" src="/Scripts/ChangeButtonType.js"></script>
    <script language="javascript" type="text/javascript" src="/Scripts/Navigation/SideBarNavigation.js"></script>
    <script language="javascript" type="text/javascript" src="/Scripts/Navigation/ButtonSorting.js"></script>
    <script language="javascript" type="text/javascript" src="/Scripts/Navigation/PreferencesTab.js"></script>
    <script language="javascript" type="text/javascript" src="/Scripts/Navigation/SideButtonAnimation.js"></script>
    <script language="javascript" type="text/javascript" src="/Scripts/Navigation/TopButtonAction.js"></script>
    <script language="javascript" type="text/javascript" src="/Scripts/Navigation/TextBoxBottomElements.js"></script>
    <script language="javascript" type="text/javascript" src="/Scripts/CreateButtons/CreateButtons.js"></script>
    <script language="javascript" type="text/javascript" src="/Scripts/CreateButtons/LoadUI_FW.js"></script>
    <script language="javascript" type="text/javascript" src="/Scripts/CreateButtons/LoadUI_TW.js"></script>
    <script language="javascript" type="text/javascript" src="/Scripts/CreateButtons/LoadUI_TW_FM.js"></script>
    <script language="javascript" type="text/javascript" src="/Scripts/CreateButtons/LoadUI_FW_FM.js"></script>
</head>
<body>
    <form id="form1" runat="server">
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:DB_9B83FB_WebsiteConnectionString %>"
        DeleteCommand="DELETE FROM [Authorization] WHERE [id] = @id" InsertCommand="INSERT INTO [Authorization] ([name], [email], [password]) VALUES (@name, @email, @password)"
        SelectCommand="SELECT [id], [name], [email], [password] FROM [Authorization]"
        UpdateCommand="UPDATE [Authorization] SET [name] = @name, [email] = @email, [password] = @password WHERE [id] = @id">
        <DeleteParameters>
            <asp:Parameter Name="id" Type="Int32" />
        </DeleteParameters>
        <InsertParameters>
            <asp:Parameter Name="name" Type="String" />
            <asp:Parameter Name="email" Type="String" />
            <asp:Parameter Name="password" Type="String" />
        </InsertParameters>
        <UpdateParameters>
            <asp:Parameter Name="name" Type="String" />
            <asp:Parameter Name="email" Type="String" />
            <asp:Parameter Name="password" Type="String" />
            <asp:Parameter Name="id" Type="Int32" />
        </UpdateParameters>
    </asp:SqlDataSource>
    <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:DB_9B83FB_WebsiteConnectionString %>"
        DeleteCommand="DELETE FROM [MainData] WHERE [id] = @id" InsertCommand="INSERT INTO [MainData] ([username], [buttonID], [buttonName], [buttonNumber], [buttonTime], [buttonType], [buttonPosition], [buttonGroup], [buttonGroupPosition], [buttonNotes], [buttonSubtasks], [parameter1], [parameter2]) VALUES (@username, @buttonID, @buttonName, @buttonNumber, @buttonTime, @buttonType, @buttonPosition, @buttonGroup, @buttonGroupPosition, @buttonNotes, @buttonSubtasks, @parameter1, @parameter2)"
        SelectCommand="SELECT [id], [username], [buttonID], [buttonName], [buttonNumber], [buttonTime], [buttonType], [buttonPosition], [buttonGroup], [buttonGroupPosition], [buttonNotes], [buttonSubtasks], [parameter1], [parameter2] FROM [MainData]"
        UpdateCommand="UPDATE [MainData] SET [username] = @username, [buttonID] = @buttonID, [buttonName] = @buttonName, [buttonNumber] = @buttonNumber, [buttonTime] = @buttonTime, [buttonType] = @buttonType, [buttonPosition] = @buttonPosition, [buttonGroup] = @buttonGroup, [buttonGroupPosition] = @buttonGroupPosition, [buttonNotes] = @buttonNotes, [buttonSubtasks] = @buttonSubtasks, [parameter1] = @parameter1, [parameter2] = @parameter2 WHERE [id] = @id">
        <DeleteParameters>
            <asp:Parameter Name="id" Type="Int32" />
        </DeleteParameters>
        <InsertParameters>
            <asp:Parameter Name="username" Type="String" />
            <asp:Parameter Name="buttonID" Type="String" />
            <asp:Parameter Name="buttonName" Type="String" />
            <asp:Parameter Name="buttonNumber" Type="Int32" />
            <asp:Parameter Name="buttonTime" Type="String" />
            <asp:Parameter Name="buttonType" Type="Int32" />
            <asp:Parameter Name="buttonPosition" Type="Int32" />
            <asp:Parameter Name="buttonGroup" Type="Int32" />
            <asp:Parameter Name="buttonGroupPosition" Type="Int32" />
            <asp:Parameter Name="buttonNotes" Type="String" />
            <asp:Parameter Name="buttonSubtasks" Type="String" />
            <asp:Parameter Name="parameter1" Type="Int32" />
            <asp:Parameter Name="parameter2" Type="Int32" />
        </InsertParameters>
        <UpdateParameters>
            <asp:Parameter Name="username" Type="String" />
            <asp:Parameter Name="buttonID" Type="String" />
            <asp:Parameter Name="buttonName" Type="String" />
            <asp:Parameter Name="buttonNumber" Type="Int32" />
            <asp:Parameter Name="buttonTime" Type="String" />
            <asp:Parameter Name="buttonType" Type="Int32" />
            <asp:Parameter Name="buttonPosition" Type="Int32" />
            <asp:Parameter Name="buttonGroup" Type="Int32" />
            <asp:Parameter Name="buttonGroupPosition" Type="Int32" />
            <asp:Parameter Name="buttonNotes" Type="String" />
            <asp:Parameter Name="buttonSubtasks" Type="String" />
            <asp:Parameter Name="parameter1" Type="Int32" />
            <asp:Parameter Name="parameter2" Type="Int32" />
            <asp:Parameter Name="id" Type="Int32" />
        </UpdateParameters>
    </asp:SqlDataSource>
    <div id="div1" runat="server" style="background-color: #FFFFFF; display: none; position: absolute;
        z-index: 200;">
        <div style="display: block">
            <table runat="server" cellpadding="0" cellspacing="0" id="table2" style="width: 100%">
                <tr>
                    <td style="width: 50px">
                        &nbsp;
                    </td>
                    <td valign="top">
                        <p class="style6">
                            Sign in</p>
                        <p class="style5">
                            Sign in to sync your app or to start&nbsp;&nbsp; a new account</p>
                        <p>
                            <asp:ImageButton ID="ImageButton1" runat="server" ImageUrl="~/images/face_book.PNG"
                                OnClientClick="return false" />
                        </p>
                        <p>
                            <asp:ImageButton ID="ImageButton2" runat="server" ImageUrl="~/images/google_tab.PNG"
                                OnClientClick="return false" />
                        </p>
                        <p>
                            <asp:ImageButton ID="SignInWithEmail" runat="server" ImageUrl="~/images/Sign_in_with_email.PNG"
                                OnClientClick="return false" />
                        </p>
                    </td>
                    <td style="width: 50px">
                        &nbsp;
                    </td>
                    <td align="center" bgcolor="#F0F0F0" valign="top" width="56">
                        <asp:Image ID="Image2" runat="server" ImageUrl="~/images/default_profile_icon.png" />
                        <br />
                        <asp:Image ID="Image3" runat="server" ImageUrl="~/images/index_avatar.JPG" />
                        <div style="position: absolute; z-index: 150; left: 379px; top: 905px">
                            <asp:Image ID="Image4" runat="server" ImageUrl="~/images/gear_image.png" Style="text-align: center" />
                        </div>
                    </td>
                    <td align="left" valign="top">
                        <div style="position: absolute; z-index: 100; left: 915px; top: 462px">
                            <asp:Image ID="Image5" runat="server" Height="323px" ImageAlign="Middle" ImageUrl="~/images/new_webapp.gif"
                                Style="margin-left: 0px; margin-top: 4px" Width="511px" />
                        </div>
                        <asp:Image ID="Image29" runat="server" ImageUrl="~/images/background.PNG" />
                    </td>
                </tr>
            </table>
        </div>
        <table id="table1" runat="server" bgcolor="White" cellpadding="0" cellspacing="0"
            class="Sidebar1">
            <tr>
                <td align="left" valign="top" width="355" style="padding-left: 30px">
                    <p class="style6">
                        <asp:Image ID="Image30" runat="server" ImageUrl="~/images/arrow_left.png" />
                        Sign in</p>
                    <p class="style39" style="width: 280px">
                        Sync all your data please use the same email as in your Any.do app account</p>
                    <p class="style5">
                        <asp:TextBox ID="TextBox1" runat="server" BorderColor="#999999" BorderStyle="Solid"
                            BorderWidth="1px" CssClass="TextTextBox" Height="46px" onblur="if(this.value=='')this.value=this.defaultValue;"
                            onfocus="if(this.value==this.defaultValue)this.value='';" MaxLength="20" Style="text-align: left;
                            padding-top: 10px; font-family: Arial, Helvetica, sans-serif; color: #808080;
                            padding-left: 20px" Width="280px" Wrap="False" spellcheck="false">E-mail</asp:TextBox>
                    </p>
                    <p class="style5">
                        <asp:TextBox ID="TextBox2" runat="server" BorderColor="#999999" BorderStyle="Solid"
                            BorderWidth="1px" CssClass="TextTextBox" Height="46px" MaxLength="20" Width="280px"
                            Wrap="False" spellcheck="false" autocomplete="off">Password</asp:TextBox>
                    </p>
                    <p style="font-family: Arial, Helvetica, sans-serif; font-size: medium; color: #FF0000"
                        align="center">
                        <asp:Label ID="SignInAnswer" runat="server" Text=""></asp:Label>
                    </p>
                    <p class="style5">
                        <asp:Button ID="Button4" runat="server" BackColor="#1F92BA" BorderStyle="None" Height="50px"
                            Style="color: #FFFFFF; font-size: medium" Text="SIGN IN" Width="304px" OnClientClick="return false" />
                    </p>
                    <p class="style5">
                        <asp:Button ID="Button2" runat="server" BackColor="White" BorderStyle="None" Height="50px"
                            Style="font-family: Arial, Helvetica, sans-serif; color: #999999; font-weight: 700"
                            Text="forgot password?" Width="304px" OnClientClick="return false" />
                    </p>
                    <p class="style5">
                        <asp:Button ID="Button3" runat="server" BackColor="White" BorderColor="#088FBC" BorderStyle="Solid"
                            BorderWidth="1px" Height="50px" Style="color: #088FBC" Text="Create a new account"
                            Width="304px" OnClientClick="return false" />
                    </p>
                </td>
            </tr>
        </table>
        <table id="CreateNewAccount" runat="server" bgcolor="White" cellpadding="0" cellspacing="0"
            class="Sidebar2" style="height: 700px">
            <tr>
                <td align="left" valign="top" width="355" style="padding-left: 30px">
                    <p class="style6">
                        <asp:Image ID="Image31" runat="server" ImageUrl="~/images/arrow_left.png" />
                        Join</p>
                    <p class="style39" style="width: 280px">
                        Create a new account and get a full sync & backup across all your devices.</p>
                    <p class="style5">
                        <asp:TextBox ID="TextBox11" runat="server" BorderColor="#999999" BorderStyle="Solid"
                            BorderWidth="1px" CssClass="TextTextBox" Height="46px" onblur="if(this.value=='')this.value=this.defaultValue;"
                            onfocus="if(this.value==this.defaultValue)this.value='';" MaxLength="20" Style="text-align: left;
                            padding-top: 10px; font-family: Arial, Helvetica, sans-serif; color: #808080;
                            padding-left: 20px" Width="280px" Wrap="False" spellcheck="false">Name</asp:TextBox>
                    </p>
                    <p class="style5">
                        <asp:TextBox ID="TextBox12" runat="server" BorderColor="#999999" BorderStyle="Solid"
                            BorderWidth="1px" CssClass="TextTextBox" Height="46px" onblur="if(this.value=='')this.value=this.defaultValue;"
                            onfocus="if(this.value==this.defaultValue)this.value='';" MaxLength="20" Style="text-align: left;
                            padding-top: 10px; font-family: Arial, Helvetica, sans-serif; color: #808080;
                            padding-left: 20px" Width="280px" Wrap="False" spellcheck="false">E-mail</asp:TextBox>
                    </p>
                    <p class="style5">
                        <asp:TextBox ID="TextBox13" runat="server" BorderColor="#999999" BorderStyle="Solid"
                            BorderWidth="1px" CssClass="TextTextBox" Height="46px" MaxLength="20" Width="280px"
                            Wrap="False" spellcheck="false">Password</asp:TextBox>
                    </p>
                    <p style="font-family: Arial, Helvetica, sans-serif; font-size: medium; color: #FF0000"
                        align="center">
                        <asp:Label ID="CreateNewAccountAnswer" runat="server" Text=""></asp:Label>
                    </p>
                    <p class="style5">
                        <asp:Button ID="Button1" runat="server" BackColor="#1F92BA" BorderStyle="None" Height="50px"
                            Style="color: #FFFFFF; font-size: medium" Text="Create Account" Width="304px"
                            OnClientClick="return false" />
                    </p>
                    <p class="style5">
                        <asp:Button ID="Button12" runat="server" BackColor="White" BorderStyle="None" Height="50px"
                            Style="font-family: Arial, Helvetica, sans-serif; color: #999999; font-weight: 700"
                            Text="already a member?" Width="304px" OnClientClick="return false" />
                    </p>
                </td>
            </tr>
        </table>
        <table id="ForgotPassword" runat="server" bgcolor="White" cellpadding="0" cellspacing="0"
            class="Sidebar3" style="height: 700px">
            <tr>
                <td align="left" valign="top" width="355" style="padding-left: 30px">
                    <p class="style6">
                        <asp:Image ID="Image32" runat="server" ImageUrl="~/images/arrow_left.png" />
                        Forgot?</p>
                    <p class="style39" style="width: 280px">
                        We'll send you a reset email</p>
                    <p class="style5">
                        <asp:TextBox ID="TextBox14" runat="server" BorderColor="#999999" BorderStyle="Solid"
                            BorderWidth="1px" CssClass="TextTextBox" Height="46px" onblur="if(this.value=='')this.value=this.defaultValue;"
                            onfocus="if(this.value==this.defaultValue)this.value='';" MaxLength="20" Style="text-align: left;
                            padding-top: 10px; font-family: Arial, Helvetica, sans-serif; color: #808080;
                            padding-left: 20px" Width="280px" Wrap="False" spellcheck="false">Your email</asp:TextBox>
                    </p>
                    <p style="font-family: Arial, Helvetica, sans-serif; font-size: medium; color: #FF0000"
                        align="center">
                        <asp:Label ID="ForgotPasswordAnswer" runat="server" Text=""></asp:Label>
                    </p>
                    <p class="style5">
                        <asp:Button ID="Button13" runat="server" BackColor="#1F92BA" BorderStyle="None" Height="50px"
                            Style="color: #FFFFFF; font-size: medium" Text="RESET PASSWORD" Width="304px"
                            OnClientClick="return false" />
                    </p>
                    <p class="style5">
                        <asp:Button ID="Button14" runat="server" BackColor="White" BorderStyle="None" Height="50px"
                            Style="font-family: Arial, Helvetica, sans-serif; color: #999999; font-weight: 700"
                            Text="sign in" Width="304px" OnClientClick="return false" />
                    </p>
                </td>
            </tr>
        </table>
    </div>
    <div id="div2" runat="server" style="position: absolute; z-index: -5; top: 0px; left: 0px;
        width: 100%; display: none;">
        <div style="display: block">
            <div>
                <table cellpadding="0" cellspacing="0" style="border-bottom: 1px solid #C0C0C0; position: absolute;
                    z-index: 15; left: 56px; width: 1844px; height: 50px; padding-left: 32px; padding-right: 10px;
                    top: 0px;">
                    <tr>
                        <td>
                            <asp:ImageButton ID="TopButton1" runat="server" ImageUrl="~/images/top_icons/1_on.jpg"
                                OnClientClick="return false" ToolTip="Time view" />
                            <asp:ImageButton ID="TopButton2" runat="server" ImageUrl="~/images/top_icons/2_off.jpg"
                                OnClientClick="return false" ToolTip="Folder view" />
                            <asp:ImageButton ID="TopButton3" runat="server" ImageUrl="~/images/top_icons/3_off.jpg"
                                OnClientClick="return false" ToolTip="Focus mode" />
                            <asp:ImageButton ID="TopButton4" runat="server" ImageUrl="~/images/top_icons/4_on.jpg"
                                OnClientClick="return false" ToolTip="Planning mode" />
                        </td>
                        <td style="text-align: right">
                            <asp:ImageButton ID="TopButton5" runat="server" ImageUrl="~/images/top_icons/5.jpg"
                                OnClientClick="return false" ToolTip="Search" />
                            <asp:ImageButton ID="TopButton6" runat="server" ImageUrl="~/images/top_icons/6.jpg"
                                OnClientClick="return false" />
                            <asp:ImageButton ID="TopButton7" runat="server" ImageUrl="~/images/top_icons/7.jpg"
                                OnClientClick="return false" />
                            <asp:ImageButton ID="TopButton8" runat="server" ImageUrl="~/images/top_icons/8.jpg"
                                OnClientClick="return false" />
                        </td>
                    </tr>
                </table>
                <table cellpadding="0" cellspacing="0" class="style01" width="100%" id="TimeViewTop"
                    style="display: block">
                    <tr>
                        <td class="style7">
                            TODAY
                        </td>
                        <td class="style7">
                            TOMORROW
                        </td>
                        <td class="style7">
                            UPCOMING
                        </td>
                        <td class="style7">
                            SOMEDAY
                        </td>
                    </tr>
                    <tr>
                        <td class="style4" colspan="1" valign="bottom" width="455">
                            <asp:Button ID="Button5" runat="server" BackColor="#F3F3F3" BorderStyle="None" Height="30px"
                                Style="font-size: large; color: #666666" Text="+" Width="440px" OnClientClick="return false"
                                CssClass="MainButtons" />
                        </td>
                        <td class="style4" valign="bottom" width="455">
                            <asp:Button ID="Button6" runat="server" BackColor="#F3F3F3" BorderStyle="None" Height="30px"
                                Style="font-size: large; color: #666666" Text="+" Width="440px" OnClientClick="return false"
                                CssClass="MainButtons" />
                        </td>
                        <td class="style4" valign="bottom" width="455">
                            <asp:Button ID="Button7" runat="server" BackColor="#F3F3F3" BorderStyle="None" Height="30px"
                                Style="font-size: large; color: #666666" Text="+" Width="440px" OnClientClick="return false"
                                CssClass="MainButtons" />
                        </td>
                        <td class="style4" valign="bottom" width="455">
                            <asp:Button ID="Button8" runat="server" BackColor="#F3F3F3" BorderStyle="None" Height="30px"
                                Style="font-size: large; color: #666666" Text="+" Width="440px" OnClientClick="return false"
                                CssClass="MainButtons" />
                        </td>
                    </tr>
                </table>
                <table cellpadding="0" cellspacing="0" class="style01" width="100%" id="FolderViewTop"
                    style="display: none">
                    <tr>
                        <td class="style7">
                            PERSONAL
                        </td>
                        <td class="style7">
                            WORK
                        </td>
                        <td class="style7">
                            NEW FOLDER
                        </td>
                    </tr>
                    <tr>
                        <td class="style4" colspan="1" valign="bottom" width="605">
                            <asp:Button ID="Button15" runat="server" BackColor="#F3F3F3" BorderStyle="None" Height="30px"
                                Style="font-size: large; color: #666666" Text="+" Width="590px" OnClientClick="return false"
                                CssClass="MainButtons" />
                        </td>
                        <td class="style4" valign="bottom" width="605">
                            <asp:Button ID="Button16" runat="server" BackColor="#F3F3F3" BorderStyle="None" Height="30px"
                                Style="font-size: large; color: #666666" Text="+" Width="590px" OnClientClick="return false"
                                CssClass="MainButtons" />
                        </td>
                        <td class="style4" valign="bottom" width="605">
                            <asp:Button ID="Button17" runat="server" BackColor="#F3F3F3" BorderStyle="None" Height="30px"
                                Style="font-size: large; color: #666666" Text="+" Width="590px" OnClientClick="return false"
                                CssClass="MainButtons" />
                        </td>
                    </tr>
                </table>
                <table border="0" cellpadding="0" cellspacing="0" style="width: 56px; height: 950px"
                    id="TableSideBar">
                    <tr>
                        <td bgcolor="#EBEBEB" style="width: 20px" valign="top" align="center">
                            <asp:Image ID="Image10" runat="server" ImageUrl="~/images/default_profile_icon.png" />
                            <br />
                            <asp:ImageButton ID="ImageButton11" runat="server" ImageUrl="~/images/index_avatar.JPG" />
                            <br />
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#EBEBEB" align="center" valign="bottom">
                            &nbsp;
                            <asp:ImageButton ID="ImageButton12" runat="server" ImageAlign="Middle" ImageUrl="~/images/gear_image.png" />
                            <br />
                            &nbsp;
                        </td>
                    </tr>
                </table>
                <table cellpadding="0" cellspacing="0" style="width: 1820px; height: 700px; top: 170px;
                    left: 100px; position: absolute; z-index: 10; display: block;" id="TimeViewTable">
                    <tr>
                        <td valign="top" width="455">
                            <asp:Panel ID="Panel1" runat="server" HorizontalAlign="Center" Style="text-align: left;
                                font-size: 13pt;" Width="440" CssClass="SortablePanels" Height="1000">
                            </asp:Panel>
                        </td>
                        <td valign="top" width="455">
                            <asp:Panel ID="Panel2" runat="server" HorizontalAlign="Center" Style="text-align: left;
                                font-size: 13pt;" Width="440" CssClass="SortablePanels" Height="1000">
                            </asp:Panel>
                        </td>
                        <td valign="top" width="455">
                            <asp:Panel ID="Panel3" runat="server" HorizontalAlign="Center" Style="text-align: left;
                                font-size: 13pt;" Width="440" CssClass="SortablePanels" Height="1000">
                            </asp:Panel>
                        </td>
                        <td valign="top" width="455">
                            <asp:Panel ID="Panel4" runat="server" HorizontalAlign="Center" Style="text-align: left;
                                font-size: 13pt;" Width="440" CssClass="SortablePanels" Height="1000">
                            </asp:Panel>
                        </td>
                    </tr>
                </table>
                <table cellpadding="0" cellspacing="0" style="width: 1821px; height: 700px; top: 170px;
                    left: 100px; position: absolute; z-index: 10; display: none;" id="FolderViewTable">
                    <tr>
                        <td valign="top">
                            <asp:Panel ID="Panel5" runat="server" HorizontalAlign="Center" Style="text-align: left;
                                font-size: 13pt;" Width="590" CssClass="SortablePanels2" Height="1000">
                            </asp:Panel>
                        </td>
                        <td valign="top">
                            <asp:Panel ID="Panel6" runat="server" HorizontalAlign="Center" Style="text-align: left;
                                font-size: 13pt;" Width="590" CssClass="SortablePanels2" Height="1000">
                            </asp:Panel>
                        </td>
                        <td valign="top">
                            <asp:Panel ID="Panel7" runat="server" HorizontalAlign="Center" Style="text-align: left;
                                font-size: 13pt;" Width="590" CssClass="SortablePanels2" Height="1000">
                            </asp:Panel>
                        </td>
                    </tr>
                </table>
                <table cellpadding="0" cellspacing="0" class="FocusModeTable" width="1820" id="FocusModeTable"
                    style="display: none">
                    <tr>
                        <td class="FocusModeButtons" valign="top">
                            <p class="FocusModeButtons">
                                TODAY
                            </p>
                            <p>
                                <asp:Button ID="Button18" runat="server" BackColor="#F3F3F3" BorderStyle="None" Height="30px"
                                    Style="font-size: large; color: #666666" Text="+" Width="1780px" OnClientClick="return false"
                                    CssClass="MainButtons" />
                            </p>
                            <p>
                                &nbsp;<asp:Panel ID="Panel8" runat="server" HorizontalAlign="Center" Style="text-align: left;
                                    font-size: 13pt;" Width="1780" CssClass="SortablePanels3">
                                </asp:Panel>
                            </p>
                            <p class="FocusModeButtons">
                                TOMORROW
                            </p>
                            <p>
                                <asp:Button ID="Button19" runat="server" BackColor="#F3F3F3" BorderStyle="None" Height="30px"
                                    Style="font-size: large; color: #666666" Text="+" Width="1780px" OnClientClick="return false"
                                    CssClass="MainButtons" />
                            </p>
                            <p>
                                &nbsp;<asp:Panel ID="Panel9" runat="server" HorizontalAlign="Center" Style="text-align: left;
                                    font-size: 13pt;" Width="1780" CssClass="SortablePanels3">
                                </asp:Panel>
                            </p>
                            <p class="FocusModeButtons">
                                UPCOMING
                            </p>
                            <p>
                                <asp:Button ID="Button20" runat="server" BackColor="#F3F3F3" BorderStyle="None" Height="30px"
                                    Style="font-size: large; color: #666666" Text="+" Width="1780px" OnClientClick="return false"
                                    CssClass="MainButtons" />
                            </p>
                            <p>
                                &nbsp;<asp:Panel ID="Panel10" runat="server" HorizontalAlign="Center" Style="text-align: left;
                                    font-size: 13pt;" Width="1780" CssClass="SortablePanels3">
                                </asp:Panel>
                            </p>
                            <p class="FocusModeButtons">
                                SOMEDAY
                            </p>
                            <p>
                                <asp:Button ID="Button21" runat="server" BackColor="#F3F3F3" BorderStyle="None" Height="30px"
                                    Style="font-size: large; color: #666666" Text="+" Width="1780px" OnClientClick="return false"
                                    CssClass="MainButtons" />
                            </p>
                            <p>
                                &nbsp;<asp:Panel ID="Panel11" runat="server" HorizontalAlign="Center" Style="text-align: left;
                                    font-size: 13pt;" Width="1780" CssClass="SortablePanels3">
                                </asp:Panel>
                            </p>
                        </td>
                    </tr>
                </table>
                <table cellpadding="0" cellspacing="0" class="FocusModeTable" width="1820" id="FocusModeTableFM"
                    style="display: none">
                    <tr>
                        <td class="FocusModeButtons" valign="top">
                            <p class="FocusModeButtons">
                                PERSONAL
                            </p>
                            <p>
                                <asp:Button ID="Button22" runat="server" BackColor="#F3F3F3" BorderStyle="None" Height="30px"
                                    Style="font-size: large; color: #666666" Text="+" Width="1780px" OnClientClick="return false"
                                    CssClass="MainButtons" />
                            </p>
                            <p>
                                &nbsp;<asp:Panel ID="Panel12" runat="server" HorizontalAlign="Center" Style="text-align: left;
                                    font-size: 13pt;" Width="1780" CssClass="SortablePanels4">
                                </asp:Panel>
                            </p>
                            <p class="FocusModeButtons">
                                WORK
                            </p>
                            <p>
                                <asp:Button ID="Button23" runat="server" BackColor="#F3F3F3" BorderStyle="None" Height="30px"
                                    Style="font-size: large; color: #666666" Text="+" Width="1780px" OnClientClick="return false"
                                    CssClass="MainButtons" />
                            </p>
                            <p>
                                &nbsp;<asp:Panel ID="Panel13" runat="server" HorizontalAlign="Center" Style="text-align: left;
                                    font-size: 13pt;" Width="1780" CssClass="SortablePanels4">
                                </asp:Panel>
                            </p>
                            <p class="FocusModeButtons">
                                NEW FOLDER
                            </p>
                            <p>
                                <asp:Button ID="Button24" runat="server" BackColor="#F3F3F3" BorderStyle="None" Height="30px"
                                    Style="font-size: large; color: #666666" Text="+" Width="1780px" OnClientClick="return false"
                                    CssClass="MainButtons" />
                            </p>
                            <p>
                                &nbsp;<asp:Panel ID="Panel14" runat="server" HorizontalAlign="Center" Style="text-align: left;
                                    font-size: 13pt;" Width="1780" CssClass="SortablePanels4">
                                </asp:Panel>
                            </p>
                        </td>
                    </tr>
                </table>
            </div>
            <table cellpadding="0" cellspacing="0" class="BackgroundLines" id="BackgroundLinesTable">
                <tr>
                    <td class="BGLine">
                    </td>
                </tr>
                <tr>
                    <td class="BGLine">
                    </td>
                </tr>
                <tr>
                    <td class="BGLine">
                    </td>
                </tr>
                <tr>
                    <td class="BGLine">
                    </td>
                </tr>
                <tr>
                    <td class="BGLine">
                    </td>
                </tr>
                <tr>
                    <td class="BGLine">
                    </td>
                </tr>
                <tr>
                    <td class="BGLine">
                    </td>
                </tr>
                <tr>
                    <td class="BGLine">
                    </td>
                </tr>
                <tr>
                    <td class="BGLine">
                    </td>
                </tr>
                <tr>
                    <td class="BGLine">
                    </td>
                </tr>
                <tr>
                    <td class="BGLine">
                    </td>
                </tr>
                <tr>
                    <td class="BGLine">
                    </td>
                </tr>
                <tr>
                    <td class="BGLine">
                    </td>
                </tr>
                <tr>
                    <td class="BGLine">
                    </td>
                </tr>
                <tr>
                    <td class="BGLine">
                    </td>
                </tr>
                <tr>
                    <td class="BGLine">
                    </td>
                </tr>
                <tr>
                    <td class="BGLine">
                    </td>
                </tr>
                <tr>
                    <td class="BGLine">
                    </td>
                </tr>
                <tr>
                    <td class="BGLine">
                    </td>
                </tr>
                <tr>
                    <td class="BGLine">
                    </td>
                </tr>
            </table>
        </div>
        <div id="div3" runat="server" style="display: block">
            <table style="position: absolute; z-index: 300; width: 100%; height: 1000px; left: 56px;
                background-color: #FFFFFF; top: 0px; vertical-align: middle; text-align: center;">
                <tr>
                    <td>
                        <asp:Panel runat="server" DefaultButton="Button11">
                            <asp:TextBox ID="TextBox3" runat="server" BorderColor="#999999" BorderStyle="Solid"
                                BorderWidth="1px" CssClass="BigText" Height="80px" Width="1100px" onblur="if(this.value=='')this.value=this.defaultValue;"
                                onfocus="if(this.value==this.defaultValue)this.value='';" spellcheck="false"
                                autocomplete="off">I want to...</asp:TextBox>
                            <asp:Button ID="Button11" Text="text" runat="server" Style="display: none" OnClientClick="return false" />
                        </asp:Panel>
                    </td>
                </tr>
            </table>
            <asp:Button Style="position: absolute; z-index: 300;" Text="X" ID="Button10" runat="server"
                BackColor="White" BorderStyle="None" CssClass="ButtonExit" Height="50px" Width="50px"
                OnClientClick="return false" />
            <div id="TextBoxBottomElements" runat="server" style="display: block; visibility: hidden;">
                <table style="position: absolute; z-index: 302; width: 1115px; height: 50px; left: 425px;
                    top: 380px; vertical-align: middle; text-align: center;">
                    <tr>
                        <td class="style31" id="SwitchType1" title="Personal">
                            PERSONAL
                        </td>
                        <td class="style15">
                            Today at 8:00 PM
                        </td>
                        <td class="style16" style="border-right-style: solid; border-left-style: solid; border-width: 1px;
                            border-color: #C0C0C0">
                            <asp:Image ID="Image33" runat="server" Height="25px" ImageUrl="~/images/icon_1.PNG" />
                        </td>
                        <td class="style19" style="border-right-style: solid; border-width: 1px; border-color: #C0C0C0">
                            <asp:Image ID="Image34" runat="server" Height="25px" ImageUrl="~/images/icon_2.PNG" />
                        </td>
                        <td width="600">
                        </td>
                        <td class="style15" align="right">
                            <asp:Image ID="Image35" runat="server" Height="25px" ImageUrl="~/images/icon_textbox.PNG" />
                        </td>
                    </tr>
                </table>
                <div>
                    <p style="position: absolute; z-index: 320; width: 50px; height: 50px; left: 1470px;
                        top: 220px; font-size: 70px; font-family: Arial, Helvetica, sans-serif; color: #0999CB;"
                        id="TextSubmitButton">
                        +
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div id="div4" runat="server" style="position: absolute; z-index: 100; width: 1920px;
        height: 1000px; top: 0px; left: 56px; background-color: #C0C0C0; opacity: 0.0;
        display: none;">
    </div>
    <div id="Premium_1" style="left: 355px; width: 1920px; height: 1000px; background-color: #FFFFFF;
        position: absolute; z-index: 412; top: 0px; vertical-align: middle; display: none;"
        align="center">
        <table cellpadding="0" cellspacing="0" style="width: 1920px; height: 1000px">
            <tr>
                <td align="center">
                    <table cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="font-family: 'Courier New', Courier, monospace; font-size: xx-large; color: #048DBA;
                                text-align: left" width="50">
                                <span id="ArrowLeft">&lt;</span>
                            </td>
                            <td style="border: 1px solid #CCCCCC">
                                <asp:Image ID="Image27" runat="server" ImageUrl="~/images/Premium/Premium_1.PNG" />
                            </td>
                            <td style="font-family: 'Courier New', Courier, monospace; font-size: xx-large; color: #098CC3;
                                text-align: right" width="50">
                                <span id="ArrowRight">&gt;</span>
                            </td>
                        </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" style="width: 800px; height: 50px; border-right-style: solid;
                        border-bottom-style: solid; border-left-style: solid; border-right-width: 1px;
                        border-bottom-width: 1px; border-left-width: 1px; border-right-color: #CCCCCC;
                        border-bottom-color: #CCCCCC; border-left-color: #CCCCCC;">
                        <tr>
                            <td align="center" bgcolor="#008FBF" class="style5" id="TD_Yearly">
                                <strong><span class="style38">YEARLY</span></strong><span class="style38"> $27/yr</span>
                            </td>
                            <td align="center" bgcolor="#167392" class="style5" id="TD_Monthly">
                                <strong><span class="style38">MONTHLY</span></strong><span class="style38"> $3/mo</span>
                            </td>
                            <td align="center" bgcolor="#EAEAEA" class="style37" id="TD_MB">
                                <strong>MAYBE LATER</strong>
                            </td>
                        </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" style="width: 800px; height: 50px">
                        <tr>
                            <td align="center" valign="bottom">
                                <asp:Image ID="Image28" runat="server" ImageUrl="~/images/Premium/PremiumImg_1.PNG" />
                            </td>
                        </tr>
                    </table>
                    <br />
                    <br />
                    <br />
                </td>
            </tr>
        </table>
    </div>
    <div runat="server" style="position: absolute; z-index: 101; width: 350px; height: 800px;
        top: 0px; left: 0px; background-color: #FFFFFF; display: none;" id="div5">
        <table cellpadding="0" cellspacing="0" style="width: 350px; height: 70px; top: 0px;
            left: 0px; padding-left: 30px">
            <tr valign="middle">
                <td>
                    <p style="font-family: Verdana; font-size: xx-large; color: #0999CB; height: 0px;
                        top: 0px; left: 0px;">
                        Settings</p>
                </td>
            </tr>
        </table>
        <br />
        <table cellpadding="0" cellspacing="0" class="style8" style="height: 256px; margin-top: 24px;
            width: 350px;">
            <tr style="height: 64px" id="TR_1">
                <td style="padding-left: 30px; border-bottom-style: solid; border-bottom-width: 1px;
                    border-bottom-color: #C0C0C0; border-left-style: solid; border-left-color: #FFFFFF;
                    border-left-width: 5px;" id="TD1">
                    <asp:Label ID="Label1" runat="server" CssClass="style11" Text="email@email.com"></asp:Label>
                    <br class="style11" />
                    <span class="style10"><font size="2">Account status: </font><strong><font size="2">Free
                        Account</font></strong></span>
                </td>
                <td align="center" class="style13" style="border-bottom-style: solid; border-bottom-width: 1px;
                    border-bottom-color: #C0C0C0; width: 64px;" id="TD11">
                    &gt;
                </td>
            </tr>
            <tr id="TR_2">
                <td class="style9" style="padding-left: 30px; border-bottom-style: solid; border-bottom-width: 1px;
                    border-bottom-color: #C0C0C0;" id="TD2">
                    Get Premium
                </td>
                <td align="center" class="style13" colspan="1" style="border-bottom-style: solid;
                    border-bottom-width: 1px; border-bottom-color: #C0C0C0; width: 64px;" id="TD22">
                    &nbsp;
                    <table cellpadding="0" cellspacing="0" style="position: absolute; z-index: 102; left: 160px;
                        top: 195px; bottom: 577px;">
                        <tr>
                            <td>
                                <asp:Image ID="Image11" runat="server" Height="28px" ImageUrl="~/images/40_procent_off.JPG" />
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr id="TR_3">
                <td class="style9" style="padding-left: 30px; border-bottom-style: solid; border-bottom-width: 1px;
                    border-bottom-color: #C0C0C0;" id="TD3">
                    Preferences
                </td>
                <td align="center" class="style13" style="border-bottom-style: solid; border-bottom-width: 1px;
                    border-bottom-color: #C0C0C0; width: 64px;" id="TD33">
                    &gt;
                </td>
            </tr>
            <tr id="TR_4">
                <td class="style9" style="padding-left: 30px; border-bottom-style: solid; border-bottom-width: 1px;
                    border-bottom-color: #C0C0C0;" id="TD4">
                    Send Feedback
                </td>
                <td align="center" class="style13" style="border-bottom-style: solid; border-bottom-width: 1px;
                    border-bottom-color: #C0C0C0; width: 64px;" id="TD44">
                    &gt;
                </td>
            </tr>
        </table>
        <br />
        <div id="div_1" style="width: 5px; height: 64px; position: absolute; z-index: 105;
            background-color: #0597D0; top: 114px; left: -5px">
        </div>
        <div id="div_2" style="width: 5px; height: 64px; position: absolute; z-index: 105;
            background-color: #0597D0; top: 178px; left: -5px">
        </div>
        <div id="div_3" style="width: 5px; height: 64px; position: absolute; z-index: 105;
            background-color: #0597D0; top: 242px; left: -5px">
        </div>
        <div id="div_4" style="width: 5px; height: 64px; position: absolute; z-index: 105;
            background-color: #0597D0; top: 306px; left: -5px">
        </div>
    </div>
    <div runat="server" style="position: absolute; z-index: 150; width: 350px; height: 800px;
        top: 0px; left: 0px; background-color: #FFFFFF; display: none;" id="Profile_1">
        <table cellpadding="0" cellspacing="0" style="width: 350px; height: 70px; top: 0px;
            left: 0px; padding-left: 30px">
            <tr valign="middle">
                <td>
                    <p style="font-family: Verdana; font-size: xx-large; color: #0999CB; height: 0px;
                        top: 0px; left: 0px;">
                        <asp:Image ID="Image6" runat="server" ImageUrl="~/images/arrow_left.png" />
                        &nbsp;Profile</p>
                </td>
            </tr>
        </table>
        <table cellpadding="0" cellspacing="0" style="width: 350px; height: 150px; top: 0px;
            left: 0px;" align="center">
            <tr valign="middle">
                <td align="center" valign="bottom">
                    <asp:Image ID="Image1" runat="server" ImageUrl="~/images/avatar_profile.JPG" Height="120px"
                        Style="margin-top: 50px" />
                </td>
            </tr>
        </table>
        <table cellpadding="0" cellspacing="0" class="style8" style="height: 240px; margin-top: 10px;
            width: 350px;">
            <tr style="height: 64px">
                <td style="border-bottom-style: solid; border-bottom-width: 1px; border-bottom-color: #C0C0C0;
                    border-left-style: solid; border-left-color: #FFFFFF; border-left-width: 5px;"
                    align="center" colspan="2">
                    <asp:Label ID="Label2" runat="server" CssClass="style11" Text="email@email.com"></asp:Label>
                    <br class="style11" />
                    <span class="style10"><font size="2">Account status: </font><strong><font size="2">Free
                        Account</font></strong></span>&nbsp;
                </td>
            </tr>
            <tr>
                <td class="style9" style="padding-left: 30px; border-bottom-style: solid; border-bottom-width: 1px;
                    border-bottom-color: #C0C0C0; color: #0A99DC;" id="TD5">
                    Upgrade to Premium
                </td>
                <td align="center" class="style13" colspan="1" style="border-bottom-style: solid;
                    border-bottom-width: 1px; border-bottom-color: #C0C0C0; width: 64px;" id="TD55">
                    &gt;&nbsp;
                </td>
            </tr>
            <tr>
                <td class="style9" style="padding-left: 30px; border-bottom-style: solid; border-bottom-width: 1px;
                    border-bottom-color: #C0C0C0;" id="TD6">
                    Reset Password
                </td>
                <td align="center" class="style13" style="border-bottom-style: solid; border-bottom-width: 1px;
                    border-bottom-color: #C0C0C0; width: 64px;">
                    &nbsp;
                </td>
            </tr>
            <tr>
                <td class="style9" style="padding-left: 30px; border-bottom-style: solid; border-bottom-width: 1px;
                    border-bottom-color: #C0C0C0;" id="TD7">
                    Sign out
                </td>
                <td align="center" class="style13" style="border-bottom-style: solid; border-bottom-width: 1px;
                    border-bottom-color: #C0C0C0; width: 64px;">
                    &nbsp;
                </td>
            </tr>
        </table>
        <div id="div_5" style="width: 5px; height: 59px; position: absolute; z-index: 155;
            background-color: #0597D0; top: 313px; left: -5px">
        </div>
        <div id="div_6" style="width: 5px; height: 59px; position: absolute; z-index: 155;
            background-color: #0597D0; top: 372px; left: -5px">
        </div>
        <div id="div_7" style="width: 5px; height: 59px; position: absolute; z-index: 155;
            background-color: #0597D0; top: 431px; left: -5px">
        </div>
    </div>
    <div runat="server" style="position: absolute; z-index: 160; width: 350px; height: 800px;
        top: 0px; left: 0px; background-color: #FFFFFF; display: none;" id="Preferences_1">
        <table cellpadding="0" cellspacing="0" style="width: 350px; height: 70px; top: 0px;
            left: 0px; padding-left: 30px">
            <tr valign="middle">
                <td>
                    <p style="font-family: Verdana; font-size: xx-large; color: #0999CB; height: 0px;
                        top: 0px; left: 0px;">
                        <asp:Image ID="Image7" runat="server" ImageUrl="~/images/arrow_left.png" />
                        &nbsp;Preferences</p>
                </td>
            </tr>
        </table>
        <table cellpadding="0" cellspacing="0" class="style8" style="height: 240px; margin-top: 50px;
            width: 350px;">
            <tr style="height: 64px">
                <td style="border-bottom-style: solid; border-bottom-width: 1px; border-bottom-color: #C0C0C0;
                    padding-left: 30px;" class="style9" id="TD70">
                    Desktop notifications
                </td>
                <td style="border-bottom-style: solid; border-bottom-width: 1px; border-bottom-color: #C0C0C0;
                    padding-right: 20px;" align="right" class="style9" width="100" id="TD80">
                    <asp:Label ID="Label3" runat="server" CssClass="style10" Text="OFF"></asp:Label>
                </td>
            </tr>
            <tr>
                <td class="style9" style="padding-left: 30px; border-bottom-style: solid; border-bottom-width: 1px;
                    border-bottom-color: #C0C0C0;" id="TD71">
                    Time Format
                </td>
                <td align="right" class="style9" colspan="1" style="border-bottom-style: solid; border-bottom-width: 1px;
                    border-bottom-color: #C0C0C0; padding-right: 20px;" id="TD81" width="100">
                    &nbsp;
                    <asp:Label ID="Label4" runat="server" CssClass="style10" Text="12 HOUR"></asp:Label>
                </td>
            </tr>
            <tr>
                <td class="style9" style="padding-left: 30px; border-bottom-style: solid; border-bottom-width: 1px;
                    border-bottom-color: #C0C0C0;" id="TD72">
                    Date Format
                </td>
                <td align="right" class="style9" style="border-bottom-style: solid; border-bottom-width: 1px;
                    border-bottom-color: #C0C0C0; padding-right: 20px;" width="100" id="TD82">
                    &nbsp;<asp:Label ID="Label5" runat="server" CssClass="style10" Text="MM/DD/YY"></asp:Label>
                    &nbsp;
                </td>
            </tr>
            <tr>
                <td class="style9" style="padding-left: 30px; border-bottom-style: solid; border-bottom-width: 1px;
                    border-bottom-color: #C0C0C0;" id="TD73">
                    Week start day
                </td>
                <td align="right" class="style9" style="border-bottom-style: solid; border-bottom-width: 1px;
                    border-bottom-color: #C0C0C0; padding-right: 20px;" width="100" id="TD83">
                    &nbsp;
                    <asp:Label ID="Label6" runat="server" CssClass="style10" Text="MON"></asp:Label>
                </td>
            </tr>
        </table>
        <div id="div_8" style="width: 5px; height: 60px; position: absolute; z-index: 161;
            background-color: #0597D0; top: 120px; left: -5px">
        </div>
        <div id="div_9" style="width: 5px; height: 60px; position: absolute; z-index: 161;
            background-color: #0597D0; top: 180px; left: -5px">
        </div>
        <div id="div_10" style="width: 5px; height: 60px; position: absolute; z-index: 161;
            background-color: #0597D0; top: 240px; left: -5px">
        </div>
        <div id="div_11" style="width: 5px; height: 60px; position: absolute; z-index: 161;
            background-color: #0597D0; top: 300px; left: -5px">
        </div>
    </div>
    <div runat="server" style="position: absolute; z-index: 160; width: 350px; height: 800px;
        top: 0px; left: 0px; background-color: #FFFFFF; display: none;" id="Feedback_1">
        <table cellpadding="0" cellspacing="0" style="width: 350px; height: 70px; top: 0px;
            left: 0px; padding-left: 30px">
            <tr valign="middle">
                <td>
                    <p style="font-family: Verdana; font-size: xx-large; color: #0999CB; height: 0px;
                        top: 0px; left: 0px;">
                        <asp:Image ID="Image8" runat="server" ImageUrl="~/images/arrow_left.png" />
                        &nbsp;Feedback</p>
                </td>
            </tr>
        </table>
        <table cellpadding="0" cellspacing="0" class="style8" style="height: 240px; margin-top: 39px;
            width: 350px;">
            <tr>
                <td style="border-bottom-style: solid; border-bottom-width: 1px; border-bottom-color: #C0C0C0;
                    padding-left: 30px;" align="left">
                    <span class="style14">Love Any.do?</span><br class="style14" />
                    <span class="style14">Get some good ideas for us</span><br class="style14" />
                    <span class="style14"><strong>We wanna hear it all! </strong></span>
                </td>
            </tr>
            <tr>
                <td class="style9" style="padding-left: 30px; border-bottom-style: solid; border-bottom-width: 1px;
                    border-bottom-color: #C0C0C0;" id="TD105" height="60">
                    <asp:Image ID="Image12" runat="server" Height="25px" ImageUrl="~/images/email_icon.JPG" />
                    Email us
                </td>
            </tr>
            <tr>
                <td class="style9" style="padding-left: 30px; border-bottom-style: solid; border-bottom-width: 1px;
                    border-bottom-color: #C0C0C0;" id="TD106" height="60">
                    <asp:Image ID="Image13" runat="server" Height="25px" ImageUrl="~/images/suggestion_icon.JPG" />
                    Suggest feature
                </td>
            </tr>
        </table>
        <div id="div_15" style="width: 5px; height: 60px; position: absolute; z-index: 165;
            background-color: #0597D0; top: 228px; left: -5px">
        </div>
        <div id="div_16" style="width: 5px; height: 60px; position: absolute; z-index: 165;
            background-color: #0597D0; top: 288px; left: -5px">
        </div>
    </div>
    <div id="Properties_1" runat="server" style="display: none">
        <table style="position: absolute; z-index: 250; width: 100%; height: 1000px; left: 56px;
            background-color: #FFFFFF; top: 0px; vertical-align: middle; text-align: center;">
            <tr>
                <td>
                    <table style="width: 1150px; height: 640px; left: 56px; background-color: #FFFFFF;
                        top: 0px; text-align: center;" align="center" cellpadding="0" cellspacing="0">
                        <tr>
                            <td valign="top">
                                <div style="position: absolute; z-index: 320; width: 1150px; left: 400px; top: 0px;
                                    height: 146px; background-color: #FFFFFF;">
                                </div>
                                <div id="TopPart_1" style="position: absolute; z-index: 310; width: 1150px; left: 400px;
                                    top: 146px; background-color: #FFFFFF;">
                                    <table class="style8">
                                        <tr>
                                            <td style="text-align: left">
                                                <asp:TextBox ID="TextBox4" runat="server" BorderStyle="None" Style="font-size: 38pt"
                                                    Width="1012px" spellcheck="false" autocomplete="off">10</asp:TextBox>
                                            </td>
                                        </tr>
                                    </table>
                                    <table class="style8">
                                        <tr>
                                            <td class="style31" id="SwitchType" title="Personal">
                                                PERSONAL
                                            </td>
                                            <td class="style15">
                                                Today at 8:00 PM
                                            </td>
                                            <td class="style16" style="border-right-style: solid; border-left-style: solid; border-width: 1px;
                                                border-color: #C0C0C0">
                                                <asp:Image ID="Image14" runat="server" Height="25px" ImageUrl="~/images/icon_1.PNG" />
                                            </td>
                                            <td class="style19" style="border-right-style: solid; border-width: 1px; border-color: #C0C0C0">
                                                <asp:Image ID="Image15" runat="server" Height="25px" ImageUrl="~/images/icon_2.PNG" />
                                            </td>
                                            <td class="style18">
                                                <asp:Image ID="Image16" runat="server" Height="25px" ImageUrl="~/images/New_icon_3.PNG" />
                                            </td>
                                            <td>
                                                &nbsp;
                                            </td>
                                        </tr>
                                    </table>
                                    <table class="style8">
                                        <tr>
                                            <td>
                                                &nbsp;
                                            </td>
                                        </tr>
                                    </table>
                                    <table class="style8" style="height: 60px">
                                        <tr>
                                            <td class="style29">
                                                <asp:Image ID="Image17" runat="server" ImageUrl="~/images/Notes_1.PNG" />
                                            </td>
                                            <td class="style28">
                                                <asp:Image ID="Image18" runat="server" ImageUrl="~/images/SubTasks_1.PNG" />
                                            </td>
                                            <td class="style30">
                                                <asp:Image ID="Image19" runat="server" ImageUrl="~/images/Attachments_1.PNG" />
                                            </td>
                                            <td class="style20">
                                                <asp:Image ID="Image20" runat="server" ImageUrl="~/images/Share_2.PNG" />
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div id="Share_1" style="display: block">
                                    <div id="TopPart_2" style="position: absolute; z-index: 310; width: 1150px; left: 400px;
                                        top: 347px; background-color: #FFFFFF;">
                                        <table class="style8" style="border: 1px solid #C0C0C0; margin-top: 15px;">
                                            <tr>
                                                <td class="style23">
                                                    <asp:Image ID="Image21" runat="server" ImageUrl="~/images/new_icon_4.PNG" Style="margin-top: 1px" />
                                                </td>
                                                <td class="style24">
                                                    <asp:Image ID="Image22" runat="server" ImageUrl="~/images/new_icon_5.PNG" Style="margin-top: 0px" />
                                                </td>
                                                <td>
                                                    &nbsp;
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div id="Invite_1" style="position: absolute; z-index: 300; left: 400px; width: 1150px;
                                        top: 422px; display: block; height: 320px;">
                                        <table class="style8" bgcolor="#F3F3F3" cellpadding="0" cellspacing="0" style="border-left: 1px solid #C0C0C0;
                                            border-right: 1px solid #C0C0C0; height: 46px; border-top-color: #C0C0C0; border-top-width: 1px;
                                            border-bottom-color: #C0C0C0; border-bottom-width: 1px;">
                                            <tr>
                                                <td class="style27" style="text-align: left; padding-left: 40px;">
                                                    <asp:TextBox ID="TextBox7" runat="server" BackColor="Transparent" BorderStyle="None"
                                                        Style="font-family: Arial, Helvetica, sans-serif; font-size: medium; color: #666666"
                                                        Width="331px" onblur="if(this.value=='')this.value=this.defaultValue;" onfocus="if(this.value==this.defaultValue)this.value='';"
                                                        spellcheck="false">Type a friend&#39;s email</asp:TextBox>
                                                </td>
                                                <td class="style26" style="padding-right: 50px">
                                                    <span id="ImportContactsText_1">import contacts </span>
                                                    <div id="ImportContacts_1" style="display: none">
                                                        <table cellpadding="0" cellspacing="0" style="border: 1px solid #CCCCCC; position: absolute;
                                                            z-index: 312; width: 200px; height: 150px; top: 46px; left: 860px; background-color: #FFFFFF;">
                                                            <tr>
                                                                <td style="text-align: center">
                                                                    <asp:Image ID="Image24" runat="server" ImageUrl="~/images/gmail.png" Height="50" />
                                                                    <br />
                                                                    <span class="style34">Import from Gmail</span>
                                                                    <br />
                                                                    <br />
                                                                    <asp:Button ID="Button9" runat="server" Text="IMPORT CONTACTS" BackColor="#0999CB"
                                                                        BorderStyle="None" Height="40px" Style="font-family: Arial, Helvetica, sans-serif;
                                                                        font-size: 10pt; font-weight: 700; color: #FFFFFF" Width="170px" OnClientClick="return false" />
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                        <table class="style8" cellpadding="0" cellspacing="0" style="border: 1px solid #C0C0C0">
                                            <tr>
                                                <td bgcolor="#F3F3F3" class="style22" style="padding: 20px 40px 20px 40px; text-align: left;
                                                    vertical-align: top;" valign="top">
                                                    <asp:TextBox ID="TextBox8" runat="server" BackColor="Transparent" BorderStyle="None"
                                                        Height="25px" Style="font-family: Arial, Helvetica, sans-serif; font-size: medium;
                                                        color: #999999" Width="1044px" onblur="if(this.value=='')this.value=this.defaultValue;"
                                                        onfocus="if(this.value==this.defaultValue)this.value='';" spellcheck="false">Add a message to all invitees (optional)</asp:TextBox>
                                                </td>
                                            </tr>
                                        </table>
                                        <table cellpadding="0" cellspacing="0" class="style8" style="border-left: 1px solid #C0C0C0;
                                            border-right: 1px solid #C0C0C0; border-bottom: 1px solid #C0C0C0; height: 46px;
                                            border-top-color: #C0C0C0; border-top-width: 1px;">
                                            <tr>
                                                <td align="right" bgcolor="#F3F3F3">
                                                    <asp:Image ID="Image23" runat="server" ImageUrl="~/images/New_icon_6.PNG" />
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div id="Invite_BG" style="position: absolute; z-index: 295; left: 400px; width: 1150px;
                                        top: 422px; height: 320px;">
                                        <table class="style8" bgcolor="#F3F3F3" cellpadding="0" cellspacing="0" style="border-left: 1px solid #C0C0C0;
                                            border-right: 1px solid #C0C0C0; height: 46px; border-top-color: #C0C0C0; border-top-width: 1px;
                                            border-bottom-color: #C0C0C0; border-bottom-width: 1px;">
                                            <tr>
                                                <td class="style27" style="text-align: left; padding-left: 40px;">
                                                    &nbsp;
                                                </td>
                                                <td class="style26" style="padding-right: 50px">
                                                    &nbsp;
                                                </td>
                                            </tr>
                                        </table>
                                        <table class="style8" cellpadding="0" cellspacing="0" style="border-width: 1px; border-color: #C0C0C0;
                                            border-right-style: solid; border-bottom-style: solid; border-left-style: solid;">
                                            <tr>
                                                <td bgcolor="#F3F3F3" class="style22" style="padding: 20px 40px 20px 40px; text-align: left"
                                                    valign="top">
                                                    &nbsp;
                                                </td>
                                            </tr>
                                        </table>
                                        <table cellpadding="0" cellspacing="0" class="style8" style="border-right-style: solid;
                                            border-bottom-style: solid; border-left-style: solid; border-width: 1px; border-color: #C0C0C0">
                                            <tr>
                                                <td align="right" style="text-align: left; padding-left: 20px;">
                                                    <asp:TextBox ID="TextBox6" runat="server" BorderStyle="None" Style="font-size: medium;
                                                        color: #666666;" Width="472px" BackColor="Transparent" onblur="if(this.value=='')this.value=this.defaultValue;"
                                                        onfocus="if(this.value==this.defaultValue)this.value='';" spellcheck="false">Add a comment...</asp:TextBox>
                                                </td>
                                                <td align="right" style="padding-right: 10px">
                                                    <asp:Image ID="Image9" runat="server" ImageUrl="~/images/Icon_Invite_BG.PNG" />
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div id="Notes_1" style="display: none">
                                    <table cellpadding="0" cellspacing="0" style="width: 1150px; height: 417px; border: 1px solid #CCCCCC;
                                        position: absolute; z-index: 314; left: 400px; top: 362px;" bgcolor="White">
                                        <tr>
                                            <td align="center">
                                                <table cellpadding="0" cellspacing="0" style="width: 1050px; height: 400px; background-image: url('images/Notes_BG.PNG');
                                                    background-repeat: repeat-y;">
                                                    <tr>
                                                        <td style="vertical-align: top; text-align: left">
                                                            <asp:TextBox ID="TextBox9" runat="server" BorderStyle="None" Style="font-family: Arial, Helvetica, sans-serif;
                                                                font-size: medium; color: #666666" Width="935px" BackColor="Transparent" Height="30px"
                                                                onblur="if(this.value=='')this.value=this.defaultValue;" onfocus="if(this.value==this.defaultValue)this.value='';"
                                                                spellcheck="false">Add a note here...</asp:TextBox>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div id="SubTasks_1" style="display: none">
                                    <table cellpadding="0" cellspacing="0" style="width: 1150px; height: 417px; border: 1px solid #CCCCCC;
                                        position: absolute; z-index: 314; left: 400px; top: 362px;" bgcolor="White">
                                        <tr>
                                            <td align="center" valign="top">
                                                <table cellpadding="0" cellspacing="0" style="width: 1150px; height: 50px;">
                                                    <tr>
                                                        <td style="vertical-align: middle; text-align: left; padding-left: 30px; border-bottom-style: solid;
                                                            border-bottom-width: 1px; border-bottom-color: #C0C0C0;">
                                                            <asp:TextBox ID="TextBox10" runat="server" BorderStyle="None" Style="font-family: Arial, Helvetica, sans-serif;
                                                                font-size: medium; color: #666666" Width="1042px" onblur="if(this.value=='')this.value=this.defaultValue;"
                                                                onfocus="if(this.value==this.defaultValue)this.value='';" spellcheck="false">+ Add a sub task</asp:TextBox>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <asp:Panel ID="SubTasksPanel_1" runat="server" Width="1150">
                                                </asp:Panel>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div id="Attachments_1" style="display: none">
                                    <table cellpadding="0" cellspacing="0" style="width: 1150px; height: 417px; border: 1px solid #CCCCCC;
                                        position: absolute; z-index: 314; left: 400px; top: 362px;" bgcolor="White">
                                        <tr>
                                            <td align="center" valign="middle">
                                                <table cellpadding="0" cellspacing="0" style="width: 1120px; height: 330px; border: 2px dashed #CCCCCC">
                                                    <tr>
                                                        <td class="style35" align="center">
                                                            Yo ! Just drop them here
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left" valign="middle" style="height: 50px; border-top-style: solid; border-top-width: 1px;
                                                border-top-color: #CCCCCC; padding-left: 15px; padding-top: 5px;">
                                                <asp:Image ID="Image25" runat="server" ImageUrl="~/images/Select_from_computer.PNG"
                                                    BorderStyle="None" />
                                                &nbsp;&nbsp;&nbsp;
                                                <asp:Image ID="Image26" runat="server" ImageUrl="~/images/Dropbox.PNG" BorderStyle="None" />
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <br />
                    <br />
                    <br />
                </td>
            </tr>
        </table>
        <asp:Button Style="position: absolute; z-index: 350;" Text="X" ID="ButtonCloseProperties"
            runat="server" BackColor="White" BorderStyle="None" CssClass="ButtonExit" Height="50px"
            Width="50px" OnClientClick="return false" />
    </div>
    <div id="Types_1" runat="server" style="display: none">
        <table style="position: absolute; z-index: 280; width: 100%; height: 1000px; left: 56px;
            background-color: #FFFFFF; top: 0px; vertical-align: middle; text-align: center;">
            <tr>
                <td>
                    <table class="style8" id="TD_Types" align="center" cellpadding="0" cellspacing="0"
                        style="border: 1px solid #C0C0C0; width: 450px; height: 150px; right: 100px;">
                        <tr>
                            <td id="TD_Personal" class="Types_TD" style="border-left-style: solid; border-left-width: 0px;
                                border-left-color: #26A3D2" title="PERSONAL">
                                PERSONAL
                            </td>
                        </tr>
                        <tr>
                            <td id="TD_Work" class="style33" style="border-width: 1px; border-color: #C0C0C0;
                                padding-left: 20px; border-top-style: solid; border-bottom-style: solid;" title="WORK">
                                WORK
                            </td>
                        </tr>
                    </table>
                    <table border="0" cellpadding="0" cellspacing="0" align="center" style="width: 450px;
                        height: 150px;">
                        <tr>
                            <td class="style32" style="border-width: 1px; border-color: #C0C0C0; padding-left: 20px;
                                padding-top: 20px; border-right-style: solid; border-bottom-style: solid; border-left-style: solid;"
                                valign="top">
                                &nbsp;<asp:TextBox ID="TextBox5" runat="server" BorderStyle="None" MaxLength="25"
                                    Style="font-family: Arial, Helvetica, sans-serif; font-size: medium; color: #666666;
                                    font-weight: 700;" Width="369px">+ NEW FOLDER</asp:TextBox>
                            </td>
                        </tr>
                    </table>
                    <br />
                    <br />
                    <br />
                </td>
            </tr>
        </table>
    </div>
    <div id="LoadingScreen" style="position: absolute; z-index: 500; background-color: #FFFFFF;
        vertical-align: middle; text-align: center; display: none;">
        <table border="0" cellpadding="0" cellspacing="0" align="center" style="vertical-align: middle;
            text-align: center; width: 1920px; height: 950px;">
            <tr>
                <td valign="bottom">
                    <asp:Image ID="Image36" runat="server" ImageUrl="~/images/loading_screen.jpg" />
                </td>
            </tr>
            <tr>
                <td valign="top">
                    <p style="font-family: 'Courier New', Courier, monospace; font-size: x-large; color: #999999">
                        Loading
                    </p>
                </td>
            </tr>
        </table>
    </div>
    </form>
</body>
</html>
