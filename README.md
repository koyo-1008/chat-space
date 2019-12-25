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
- has_many :groups, through: :groups_users

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|title|string|nill: false|
|messages_id|integer|null: false|
|user_id|integer|null: false, foreign_key: true|


### Association
- has_many :groups_users
- has_many :users, through: :groups_users

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|text|text|null: false|

### Association
- belong :user
- belong :groups






