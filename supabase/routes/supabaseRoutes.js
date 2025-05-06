// supabaseRoutes.js
const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');

// 🔹 GET /api/supabase/coches
router.get('/coches', async (req, res) => {
  const { data, error } = await supabase.from('coches').select('*'); // ✅ minúscula
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// 🔹 GET /api/supabase/clientes
router.get('/clientes', async (req, res) => {
  const { data, error } = await supabase.from('clientes').select('*'); // ✅ minúscula
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// 🔹 GET /api/supabase/reservas
router.get('/reservas', async (req, res) => {
  const { data, error } = await supabase.from('reservas').select('*'); // ✅ minúscula
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});


module.exports = router;
