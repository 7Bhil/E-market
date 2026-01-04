# E-Market – Répartition des tâches par membre (MVP)

Ce document définit une **répartition claire, équilibrée et réaliste du travail** entre les membres des équipes **Frontend (React)** et **Backend (Django)** pour la réalisation du **MVP du projet E-Market**.

Il sert de **référence officielle de coordination** pour l’équipe et a pour objectifs :

- une charge de travail équitable pour chaque membre,
- des responsabilités clairement identifiées,
- une collaboration fluide entre Frontend et Backend,
- une montée en compétence progressive des profils juniors,
- une exécution efficace du MVP.

---

## 1. Organisation générale du projet

- **Frontend** : React + Vite
- **Backend** : Django (API REST)
- **Architecture** : modulaire, orientée MVP
- **Méthodologie** : développement par domaines fonctionnels

### Rôles transversaux

- **Lead Frontend** : cohérence UI, structure et intégration
- **Lead Backend** : architecture, sécurité et qualité des APIs
- **Profils Full-Stack** : coordination Frontend ↔ Backend

---

## 2. Répartition – Équipe Frontend (React)

> Principe appliqué : **répartition du projet**, avec une charge équivalente en nombre de pages, logique métier et intégration services.

---

### 2.1 Gabriel – Lead Frontend (Structure & Dashboard)

**Branche Git à utiliser**

- `feat/frontend-structure-dashboard`

**Responsabilités**

- Structure globale du projet React
- Routing principal (`App.jsx`, `main.jsx`)
- Layouts et composants transversaux
- Dashboard marchand

**Fichiers et dossiers pris en charge**

```
App.jsx
main.jsx
components/layout/
components/common/
pages/dashboard/Dashboard.jsx
```

---

### 2.2 David – Authentification & Onboarding

**Branche Git à utiliser**

- `feat/frontend-auth-onboarding`

**Responsabilités**

- Authentification des marchands
- Onboarding initial après inscription

**Fichiers et dossiers pris en charge**

```
pages/auth/
- Login.jsx
- Register.jsx
- OtpVerification.jsx

pages/onboarding/
- SelectCountry.jsx
- CreateStore.jsx
- OnboardingComplete.jsx

services/auth.service.js
```

---

### 2.3 Mel – Produits & Catalogue

**Branche Git à utiliser**

- `feat/frontend-products`

**Responsabilités**

- Gestion complète des produits
- Intégration des services produits

**Fichiers et dossiers pris en charge**

```
pages/products/
- Products.jsx
- ProductCreate.jsx
- ProductEdit.jsx

services/product.service.js
```

---

### 2.4 Bhil – Boutique Client (Frontend)

**Branche Git à utiliser**

- `feat/frontend-store`

**Responsabilités**

- Parcours client public
- Achat et validation de commande

**Fichiers et dossiers pris en charge**

```
pages/store/
- StoreHome.jsx
- StoreProducts.jsx
- StoreProduct.jsx
- Cart.jsx
- Checkout.jsx
- OrderSuccess.jsx

components/ui/
```

---

### 2.5 Jean-Paul – Clients, Commandes & Paiements (Frontend)

**Branche Git à utiliser**

- `feat/frontend-orders-payments`

**Responsabilités**

- Espace client connecté
- Suivi des commandes et paiements

**Fichiers et dossiers pris en charge**

```
pages/customer/
- CustomerLogin.jsx
- CustomerOrders.jsx
- CustomerOrderTracking.jsx

pages/orders/
- Orders.jsx
- OrderDetails.jsx

pages/payments/
- Transactions.jsx
- PendingPayments.jsx

services/order.service.js
services/payment.service.js
```

---

## 3. Répartition – Équipe Backend (Django)

> Principe appliqué : **1 domaine métier = 1 responsable**, avec complexité comparable et responsabilité complète sur les APIs associées.

### Architecture Django

```
backend/
├── accounts/
├── stores/
├── products/
├── orders/
├── payments/
```

---

### 3.1 Jean-Paul – Lead Backend & Architecture

**Branche Git à utiliser**

- `feat/backend-accounts-auth`

**Responsabilités**

- Mise en place de l’architecture Django
- Authentification et autorisation (JWT, rôles)
- Sécurité, permissions et bonnes pratiques API
- Validation des contrats API Frontend ↔ Backend

**Applications**

- `accounts`

---

### 3.2 Bérenger – Boutiques & Produits (Backend)

**Branche Git à utiliser**

- `feat/backend-stores-products`

**Responsabilités**

- Logique métier e-commerce
- Gestion des boutiques et des produits

**Applications**

- `stores`
- `products`

---

### 3.3 Delphin – Commandes & Paiements (Backend)

**Branche Git à utiliser**

- `feat/backend-orders-payments`

**Responsabilités**

- Implémentation du flux de commandes (MVP)
- Gestion basique des paiements
- Travail encadré sur la logique métier

**Applications**

- `orders`
- `payments`

---

### 3.4 Bhil – Support Backend

**Branche Git à utiliser**

- `feat/backend-support`

**Responsabilités**

- Support aux développeurs backend
- Apprentissage progressif de Django

**Tâches confiées**

- Création de modèles simples
- Tests d’endpoints API
- Documentation technique

---

## 4. Rôles transversaux clés

### Jean-Paul

- Référent technique Backend
- Lien Frontend ↔ Backend
- Validation des flux critiques

### Gabriel

- Référent UI/UX
- Cohérence globale du frontend
- Intégration finale des écrans

---

## 5. Synthèse

| Membre    | Rôle principal            | Zone de responsabilité             |
| --------- | ------------------------- | ---------------------------------- |
| Gabriel   | Lead Frontend             | Structure, layout, dashboard       |
| David     | Frontend                  | Authentification                   |
| Mel       | Frontend                  | Produits (UI)                      |
| Bhil      | Frontend / Backend        | Boutique client / Support Django   |
| Jean-Paul | Lead Backend / Full-Stack | Architecture, Auth, APIs critiques |
| Delphin   | Backend junior            | Commandes & Paiements (MVP)        |
| Bérenger  | Backend                   | Boutiques & Produits (API)         |
