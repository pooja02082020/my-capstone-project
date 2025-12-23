export const authService = {
  login: async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!email || !password) {
          reject(new Error("Missing credentials"));
          return;
        }

        if (password === "fail") {
          reject(new Error("Invalid credentials"));
          return;
        }

        let role = "CUSTOMER";
        if (email.toLowerCase().includes("admin")) role = "ADMIN";
        else if (email.toLowerCase().includes("emp")) role = "EMPLOYEE";

        resolve({
          token: "mock-jwt-" + Math.random().toString(36).substring(2),
          role,
          email,
          name: email.split("@")[0],
        });
      }, 500);
    });
  },

  register: async () => {
    return Promise.resolve({ success: true });
  },
};
