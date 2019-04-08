export class Registration {
    public userName: string;
    public loginName: string;
    public password: string;
    public email: string;
    public contactNo: string;
    public address: string;

  
    constructor(userName: string, loginName: string, password: string, contactNo: string, address: string) {
      this.userName = userName;
      this.loginName = loginName;
      this.password = password;
      this.contactNo = contactNo;
      this.address = address;
    }
  }