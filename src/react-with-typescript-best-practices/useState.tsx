import React, { useState } from 'react';

type User = {
  email: string;
  id: string;
};

// the generic is the < >
// the union is the User | null
// together, Typescript konws, "Ah, user can be User or null".
const [user, setUser] = useState<User | null>(null);
