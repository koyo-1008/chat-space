## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|passward|string|null: false|
|nickname|string|nill: false|

### Association
- has_many :groups_users
- has_many :messages
- has_many :groups, through: :groups_users

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|title|string|nill: false|


### Association
- has_many :groups_users
- has_many :  users,  through:  :groups_users
- has_many :messages

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|text|text||
|image|text||
### Association
- belongs_to :user
- belongs_to :group






