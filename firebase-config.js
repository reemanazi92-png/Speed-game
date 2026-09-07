{
  "rules": {
    "games": {
      // لا يسمح بالقراءة إلا للمستخدمين المسجلين (بما فيهم الدخول المجهول)
      ".read": "auth != null",
      
      "gameState": {
        // يسمح بالتعديل على حالة اللعبة فقط للمستخدمين المسجلين
        ".write": "auth != null",
        ".validate": "newData.hasChildren(['status', 'roundId'])"
      },

      "answers": {
        "$roundId": {
          "$teamId": {
            // يسمح للمستخدم المسجل كتابة الإجابات
            ".write": "auth != null",
            "$answerId": {
              // التحقق من بنية البيانات وصحتها
              ".validate": "newData.hasChildren(['text', 'timestamp']) && newData.child('text').isString() && newData.child('text').val().length > 0"
            }
          }
        }
      }
    }
  }
}
