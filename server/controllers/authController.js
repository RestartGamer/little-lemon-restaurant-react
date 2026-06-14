import { users } from "../data/users.js";

function createPublicUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
}

function createToken() {
  return `mock-token-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function registerUser(req, res) {
  const { name, email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }

  const newUser = {
    id: users.length + 1,
    name: name || "User",
    email,
    password,
    token: createToken(),
  };
  

  users.push(newUser);

  

  res.status(201).json({
    user: createPublicUser(newUser),
    token: newUser.token,
  });
}

export function loginUser(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  user.token = createToken();

  res.json({
    user: createPublicUser(user),
    token: user.token,
  });
}

export function getCurrentUser(req, res) {
  res.json({
    user: createPublicUser(req.user),
  });
}
