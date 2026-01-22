export async function handler(event) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      hike: "🏔️ Demo-Wanderung: Tirol, 3h, leicht, Panoramaweg mit Alm"
    })
  };
}
