import Debug "mo:base/Debug";
import HashMap "mo:base/HashMap";
import List "mo:base/List";
import Text "mo:base/Text";

actor AnonChat {
  public type chat = {
    sender:Text;
    message:Text;
  };
  let map = HashMap.HashMap<Text, List.List<chat>>(10, Text.equal, Text.hash);

 public func sendMessage(senderName: Text, messageSent: Text, roomId: Text) {
    let newChat: chat = {
        sender = senderName;
        message = messageSent;
    };
    var newList = map.get(roomId);
    switch (newList) {
        case (?newList) {
          let newList1 = List.push(newChat, newList);
          map.put(roomId, newList1);
        };
        case null {
            var newList: List.List<chat> = List.nil<chat>();
            newList:=List.push(newChat,newList);
            map.put(roomId, newList);
        };
    };
};

public func getMessage(roomId: Text): async [chat]{
    let newList = map.get(roomId);
    switch (newList) {
        case (?list) {
            return List.toArray(list);
        };
        case null {
            return [];
        };
    };
 };
 public func createNewRoom(Id: Text)
  {
      var newList: List.List<chat> = List.nil<chat>();
      map.put(Id, newList);
  }
};