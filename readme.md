#Notes on hashing

**Hashing Algo**
  Plaintext ==> Hash Function ==> Hashed Text


  **Salting the Hash**
      Plaintext ==>       
                            Salt + Plaintext ==> Hash Function ==> Hashed Text
      Random Salt ==> 




Passwords must always be stored as Hash Value in the database and not in Plain Text.
We can use crypto module in NodeJS to implement different Hashing Algorithms like md5, sha264, hmac etc.
Salting is a process in which a random string is added to the plain text before it is passed to the hash function to get a more secure hashed string.
In my opinion, we must always use bcrypt module in NodeJS, as it allows Salting the hash, which makes it more secure and much more difficult for an attacker to crack it.