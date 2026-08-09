export function generateUniqueEmail(): string {
    const email = 'testuser' + Date.now() + '@example.com';
    return email;
}
