// src/utils/promptUser.ts
export const promptCategoryForRequest = async (): Promise<{ name: string; description: string }> => {
    console.log("CategoryPrompt is rendered")
    const name = prompt("Lütfen kategori adını girin:");
    const description = prompt("Lütfen kategori açıklamasını girin:");
  
    if (!name || !description) {
      alert("Lütfen tüm alanları doldurun.");
      return promptCategoryForRequest(); // Geçersiz giriş durumunda tekrar sor
    }
  
    return { name, description }; // JSON formatında döndür
  };
  