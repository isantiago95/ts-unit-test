
export enum PasswordErrors {
    TOO_SHORT = "Password is too short",
    NO_UPPERCASE = "Password has no uppercase letters",
    NO_LOWERCASE = "Password has no lowercase letters",
    NO_NUMBER = "Password has no numbers",
}

export interface CheckResult {
    valid: boolean;
    reasons: PasswordErrors[];
}

export class PasswordChecker {

    public checkPassword(password: string): CheckResult {
        const reasons: PasswordErrors[] = [];

        this.checkForLength(password, reasons);
        this.checkForUpperCase(password, reasons);
        this.checkForLowerCase(password, reasons);

        return { valid: reasons.length ? false : true, reasons };
    }
    
    public checkAdminPassword(password:string): CheckResult{
        const {reasons} = this.checkPassword(password);
        this.checkForNumber(password, reasons);

        return { valid: reasons.length ? false : true, reasons };
    }

    private checkForNumber(password: string, reasons: PasswordErrors[]) {
        const hasNumber = /\d/;
        if (!hasNumber.test(password)) reasons.push(PasswordErrors.NO_NUMBER);
    }

    private checkForLength(password: string, reasons: PasswordErrors[]) {
        if (password.length < 8) reasons.push(PasswordErrors.TOO_SHORT);
    }

    private checkForUpperCase(password: string, reasons: PasswordErrors[]) {
        if (password.toUpperCase() === password) reasons.push(PasswordErrors.NO_LOWERCASE);
    }

    private checkForLowerCase(password: string, reasons: PasswordErrors[]) {
        if (password.toLowerCase() === password) reasons.push(PasswordErrors.NO_UPPERCASE);
    }
    
}
