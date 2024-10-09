// src/utils/promptUser.ts
export const promptProductForRequest = async (): Promise<{ name: string; description: string }> => {
    console.log("ProductPrompt is rendered")
    const name = prompt("Lütfen kategori adını girin:");
    const description = prompt("Lütfen kategori açıklamasını girin:");
  
    if (!name || !description) {
      alert("Lütfen tüm alanları doldurun.");
      return promptProductForRequest(); // Geçersiz giriş durumunda tekrar sor
    }
  
    return { name, description }; // JSON formatında döndür
  };
  